# RiBuzz — referencia de la API HTTP

Este documento es la **fuente de verdad** para la superficie HTTP expuesta bajo `src/app/api/**`: metodos, rutas, cuerpos, queries, cabeceras, respuestas, errores y notas de seguridad. El [README](../README.md) cubre instalacion, Supabase, Docker y flujo de desarrollo general.

**Mantenimiento:** al agregar o cambiar un `route.ts`, actualiza este archivo y los esquemas Zod en [`src/lib/schemas/`](../src/lib/schemas/).

---

## Convenciones generales

### Base URL

En desarrollo local, las rutas cuelgan del origen de la app (por defecto `http://localhost:3000`). Ejemplo: `POST http://localhost:3000/api/auth/login`.

### Formato JSON

| Tipo | Forma |
|------|--------|
| Exito | `{ "ok": true, "data": <T>, "meta"?: object }` |
| Error | `{ "ok": false, "error": { "code": string, "message": string, "fieldErrors"?: object } }` |

Implementacion: [`src/lib/api/response.ts`](../src/lib/api/response.ts), errores tipados: [`src/lib/api/errors.ts`](../src/lib/api/errors.ts).

### Content-Type

Las rutas que aceptan cuerpo esperan `Content-Type: application/json` salvo que se indique lo contrario.

---

## Rutas publicas

### `POST /api/diagnostic-request`

Solicitud de diagnostico (lead). Rate limit por IP (`RATE_LIMIT_MAX_PUBLIC_REQUESTS`, `RATE_LIMIT_WINDOW_MS`).

**Cuerpo** (Zod: [`diagnostic-request.ts`](../src/lib/schemas/diagnostic-request.ts)):

| Campo | Tipo | Notas |
|-------|------|--------|
| `nombre` | string | 2–120 |
| `empresa` | string | 2–160 |
| `cargo` | string? | max 120 |
| `whatsapp` | string? | min 7, max 40 |
| `email` | string | email, max 160 |
| `sector` | string | 2–120 |
| `yaEstaVendiendo` | boolean \| string | `"true"` / `"false"` / `"1"` / `"0"` aceptados |
| `retoPrincipal` | string | 10–600 |
| `tamanoEquipo` | string? | max 80 |
| `contexto` | string? | max 3000 |
| `source` | string? | 2–80 |
| `turnstileToken` | string? | Obligatorio si Turnstile esta configurado (ver abajo) |
| `website` | string? | Honeypot: debe ir vacio; si tiene valor, la solicitud se rechaza |

**Turnstile:** si `TURNSTILE_SECRET_KEY` y `NEXT_PUBLIC_TURNSTILE_SITE_KEY` estan ambos definidos, `turnstileToken` es obligatorio. Si ambos estan vacios, no se valida.

**Respuestas:** `201` creado, `202` duplicado detectado (ver payload `data` en implementacion).

---

### `POST /api/track-cta`

Evento de clic en CTA. Rate limit: `CTA_TRACK_RATE_LIMIT_MAX` / `RATE_LIMIT_WINDOW_MS`.

**Cuerpo** (Zod: [`track-cta.ts`](../src/lib/schemas/track-cta.ts)):

| Campo | Tipo | Notas |
|-------|------|--------|
| `label` | string | 2–120 |
| `location` | string | 2–120 |
| `href` | string | URL, max 500 |
| `source` | string? | 2–80 |
| `diagnosticRequestId` | uuid? | |
| `metadata` | record? | |
| `turnstileToken` | string? | Misma regla que diagnostic-request |
| `website` | string? | Honeypot, vacio |

---

### `GET /api/health`

Comprobacion de salud del backend (incluye consulta a Supabase con rol de servicio). Respuesta `503` si el backend no es saludable.

---

## Autenticacion (`/api/auth/*`)

Usa el cliente Supabase con cookies en el servidor ([`server.ts`](../src/lib/supabase/server.ts)) y la logica en [`auth-service.ts`](../src/services/auth-service.ts) (expuesta via [`bootstrap.ts`](../src/services/bootstrap.ts)).

### Archivos de implementacion

| Recurso | Ruta en repo |
|---------|----------------|
| Esquemas Zod | [`src/lib/schemas/auth.ts`](../src/lib/schemas/auth.ts) |
| Servicio | [`src/services/auth-service.ts`](../src/services/auth-service.ts) |
| Acceso admin / usuario | [`src/services/admin-access-service.ts`](../src/services/admin-access-service.ts) |

### Tabla de rutas

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| `POST` | `/api/auth/signup` | Registro email/contrasena. Rate limit por IP (`AUTH_RATE_LIMIT_MAX_SIGNUP`). |
| `POST` | `/api/auth/login` | Login email/contrasena. Rate limit (`AUTH_RATE_LIMIT_MAX_LOGIN`). |
| `POST` | `/api/auth/logout` | Cierra sesion (cookies). |
| `GET` | `/api/auth/session` | `{ authenticated, session? }` resumido. |
| `GET` | `/api/auth/me` | Requiere sesion (`requireUserAccess`). |
| `GET` | `/api/auth/admin/me` | Requiere admin (`requireAdminAccess`, ver seccion Admin). |
| `POST` | `/api/auth/oauth/google` | Devuelve `{ url }` para redirigir a Google. |
| `GET` | `/api/auth/callback` | Intercambia `code` (query) por sesion. Ver query params abajo. |
| `POST` | `/api/auth/password/forgot` | Email de recuperacion. Rate limit (`AUTH_RATE_LIMIT_MAX_FORGOT_PASSWORD`). |
| `POST` | `/api/auth/password/reset` | Nueva contrasena; requiere sesion de recuperacion del enlace. |

### `POST /api/auth/signup`

**Body JSON:**

```json
{
  "email": "usuario@example.com",
  "password": "minimo8caracteres",
  "fullName": "Opcional"
}
```

- `fullName` opcional, 2–120 caracteres si se envia.
- Construye `emailRedirectTo` absoluto usando `NEXT_PUBLIC_APP_URL` + `NEXT_PUBLIC_AUTH_CALLBACK_PATH` (defecto `/api/auth/callback`). Sin `NEXT_PUBLIC_APP_URL` el servidor puede responder error al intentar enviar enlaces.

**Respuesta tipica:** `201`, `data.user`, `data.session` (puede ser `null` si el proyecto exige confirmacion de email).

---

### `POST /api/auth/login`

**Body JSON:**

```json
{
  "email": "usuario@example.com",
  "password": "contrasena"
}
```

---

### `POST /api/auth/oauth/google`

**Body JSON (todo opcional):**

```json
{
  "redirectTo": "https://opcional.example/callback",
  "nextPath": "/ruta/relativa/despues-login"
}
```

Respuesta: `{ "ok": true, "data": { "url": "..." } }`. El navegador debe redirigir a `url`.

---

### `GET /api/auth/callback`

No es JSON: **redireccion HTTP** tras intercambiar el codigo.

**Query:**

| Parametro | Descripcion |
|-----------|-------------|
| `code` | Codigo OAuth / magic link (requerido para exito) |
| `next` | Ruta relativa opcional (debe empezar por `/`); si falta o es invalida, se usa `NEXT_PUBLIC_AUTH_POST_LOGIN_PATH` |
| `error`, `error_description` | Propagados por el proveedor; redirigen a la ruta de error |

Solo se permiten destinos `next` **relativos** al origen de la app (mitigacion open redirect). Errores: redireccion a `NEXT_PUBLIC_AUTH_ERROR_PATH` con query `reason`, etc.

---

### `POST /api/auth/password/forgot`

**Body JSON:**

```json
{
  "email": "usuario@example.com",
  "redirectTo": "https://opcional/donde-vuelve-tras-email"
}
```

`redirectTo` opcional; por defecto se usa la URL absoluta del callback de auth.

---

### `POST /api/auth/password/reset`

**Body JSON:**

```json
{ "password": "nuevaContrasena8+" }
```

Requiere cookies de sesion de recuperacion establecidas por Supabase al abrir el enlace del correo.

---

## Rutas admin (`/api/admin/*`)

Todas exigen [`requireAdminAccess(request)`](../src/services/admin-access-service.ts):

1. **Clave interna:** `Authorization: Bearer <INTERNAL_ADMIN_API_KEY>` o header `x-admin-api-key`.
2. **O** sesion Supabase (cookies) con usuario activo en `public.admin_profiles`.

Roles en perfil: `owner`, `admin`, `reviewer`. Para restricciones adicionales por rol usar `requireAdminRole` en codigo.

### `GET /api/admin/diagnostic-requests`

**Query** (Zod: [`admin-diagnostic-request.ts`](../src/lib/schemas/admin-diagnostic-request.ts)):

| Parametro | Descripcion |
|-----------|-------------|
| `status` | Opcional: `pending_review` \| `reviewed` \| `qualified` \| `unqualified` \| `archived` |
| `limit` | Entero 1–100, defecto 20 |
| `cursor` | Opcional, datetime ISO para paginacion |

---

### `PATCH /api/admin/diagnostic-requests/[id]`

**Body JSON** (al menos uno de los dos campos):

```json
{
  "status": "reviewed",
  "internalNotes": "Notas internas opcionales"
}
```

---

## Variables de entorno que afectan la API

Definidas y validadas en [`src/lib/env.ts`](../src/lib/env.ts) y [`src/lib/public-env.ts`](../src/lib/public-env.ts). Plantilla comentada: [`.env.example`](../.env.example).

### Autenticacion y callbacks

| Variable | Rol |
|----------|-----|
| `NEXT_PUBLIC_APP_URL` | Base para URLs absolutas (signup, forgot password, OAuth). **Recomendada** en entornos donde se use auth por email/OAuth. |
| `NEXT_PUBLIC_AUTH_CALLBACK_PATH` | Defecto `/api/auth/callback`. |
| `NEXT_PUBLIC_AUTH_POST_LOGIN_PATH` | Defecto `/`. |
| `NEXT_PUBLIC_AUTH_ERROR_PATH` | Defecto `/login`. |
| `AUTH_RATE_LIMIT_MAX_SIGNUP` | Rate limit signup por IP / ventana. |
| `AUTH_RATE_LIMIT_MAX_LOGIN` | Rate limit login. |
| `AUTH_RATE_LIMIT_MAX_FORGOT_PASSWORD` | Rate limit forgot password. |

### Supabase local (solo desarrollo)

[`.env.supabase.docker`](../.env.supabase.docker): URL `http://127.0.0.1:54321` y JWT demo del CLI. Uso tipico: `npm run test:supabase:docker` tras `supabase start`. **No usar en produccion.**

### Supabase Dashboard (proyecto cloud)

- **Authentication > URL configuration:** Site URL y Redirect URLs deben incluir tu origen y `.../api/auth/callback`.
- **Google OAuth:** habilitar proveedor si usas `POST /api/auth/oauth/google`.

---

## Verificacion rapida (smoke tests)

| Comando | Proposito |
|---------|-----------|
| `npm run test:supabase` | Conectividad PostgREST + service role usando `.env.local` / `.env`. |
| `npm run test:supabase:docker` | Igual, forzando `.env.supabase.docker` (API en `127.0.0.1:54321`). |

Script: [`scripts/supabase-smoke-test.mjs`](../scripts/supabase-smoke-test.mjs). Esquemas auth (Node test): `node --test src/lib/schemas/auth.test.ts`.

---

## Ejemplo: crear usuario por API

Con el stack local (`supabase start`) y Next sirviendo con las mismas variables que apuntan a `127.0.0.1:54321`:

```http
POST /api/auth/signup
Content-Type: application/json

{
  "email": "usuario-prueba@example.com",
  "password": "claveSegura12",
  "fullName": "Usuario Prueba"
}
```

Respuesta exitosa: `ok: true`, `data.user` con `id` y `email`, y `data.session` si la politica de confirmacion lo permite.
