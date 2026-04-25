# RiBuzz

Sitio web publico de RiBuzz construido con Next.js App Router, TypeScript y Tailwind CSS.

## Backend Foundation

La base backend ya queda preparada para produccion ligera sobre Supabase:

- validacion estricta de entorno
- clientes Supabase separados por contexto
- migraciones SQL reproducibles
- capas `repository/service`
- rutas API publicas y admin-ready (referencia HTTP: [docs/API.md](docs/API.md))
- RLS, rate limiting, honeypot y Turnstile opcional

## Variables de entorno requeridas

Copia `.env.example` a `.env.local` y completa:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
INTERNAL_ADMIN_API_KEY=replace-with-a-long-random-admin-token
```

Opcionales:

```bash
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_PUBLIC_REQUESTS=10
CTA_TRACK_RATE_LIMIT_MAX=60
DIAGNOSTIC_DUPLICATE_WINDOW_HOURS=24
```

Las variables opcionales de autenticacion, callbacks y el archivo **`.env.supabase.docker`** para el stack local estan descritas en la referencia de API: [docs/API.md](docs/API.md).

## Supabase Setup

1. Crea un proyecto en Supabase.
2. Toma `Project URL`, `anon key` y `service role key`.
3. Ejecuta la migracion SQL ubicada en `supabase/migrations/20260408193000_backend_foundation.sql`.
4. Crea perfiles internos en `auth.users` y luego inserta sus filas en `public.admin_profiles`.
5. Guarda `INTERNAL_ADMIN_API_KEY` como secreto de servidor. Esta llave sirve para rutas admin mientras no exista UI interna autenticada.

## Como correr migraciones

Si usas la CLI de Supabase:

```bash
supabase db push
```

Si todavia no usas la CLI, puedes ejecutar la migracion SQL directamente en el SQL Editor de Supabase.

## Supabase local (Docker, CLI)

El repo incluye [`supabase/config.toml`](supabase/config.toml) y migraciones en [`supabase/migrations/`](supabase/migrations/) para la CLI. Para levantar Postgres, Auth, PostgREST y el resto del stack en contenedores:

```bash
supabase start
```

- Studio: `http://127.0.0.1:54323`
- API: `http://127.0.0.1:54321` (coincide con [`.env.supabase.docker`](.env.supabase.docker))
- Claves y URLs al vuelo: `supabase status -o env`

Las migraciones en `supabase/migrations/` se aplican al arrancar el stack local. Para comprobar conectividad contra esa instancia (sin depender de `.env.local` de cloud):

```bash
npm run test:supabase:docker
```

Para desarrollo Next contra el mismo stack, puedes copiar las variables de `.env.supabase.docker` a `.env.local` o mezclarlas a mano. Cuando termines:

```bash
supabase stop
```

## Referencia HTTP (API)

La documentacion dedicada a **todas** las rutas bajo `src/app/api/**` (metodos, JSON, queries, cabeceras, errores, rate limits, variables que afectan la API y ejemplos) esta en **[docs/API.md](docs/API.md)**. Actualizala cuando cambie la superficie HTTP publica.

## Seguridad

- `SUPABASE_SERVICE_ROLE_KEY` se usa solo en archivos server-only.
- El cliente browser solo usa `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Las tablas sensibles tienen RLS activado.
- No hay acceso publico directo a tablas de leads.
- Las rutas publicas validan con Zod, soportan honeypot y pueden validar Turnstile.
- Hay rate limiting en memoria listo para reemplazarse por Redis/Upstash si mas adelante hace falta distribucion real.
- Detalle de seguridad por endpoint (auth, callback, admin): [docs/API.md](docs/API.md).

## Pruebas contra Supabase (smoke tests)

Script: [`scripts/supabase-smoke-test.mjs`](scripts/supabase-smoke-test.mjs). Hace una lectura ligera a `diagnostic_requests` con el **service role** (misma idea que [`src/services/health-service.ts`](src/services/health-service.ts)).

| Script npm | Cuando usarlo |
|------------|----------------|
| `npm run test:supabase` | Variables en `.env.local` / `.env` (proyecto cloud o el que configures). |
| `npm run test:supabase:docker` | Tras `supabase start`; fuerza `.env.supabase.docker` para apuntar al API local aunque `.env.local` sea de otro entorno. |

Tests de esquema Zod (auth): `node --test src/lib/schemas/auth.test.ts`.

## Desarrollo

```bash
npm install
npm run dev
```

Para validar build con variables de entorno reales o placeholder bien formadas:

```bash
npm run build
```

## Preview con Docker antes de desplegar

1. Crea tu archivo local de entorno:

```bash
cp .env.example .env.local
```

2. Completa `.env.local` con valores validos para Supabase y tus secretos.

3. Construye y levanta la version de produccion local:

```bash
docker compose --env-file .env.local up --build
```

4. Abre `http://localhost:3000` y valida los cambios igual que lo haria el contenedor de despliegue.

5. Cuando termines:

```bash
docker compose down
```

Si quieres rehacer la imagen desde cero porque cambiaste dependencias o variables de build:

```bash
docker compose --env-file .env.local build --no-cache
docker compose --env-file .env.local up
```
