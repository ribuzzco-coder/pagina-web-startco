# RiBuzz

Sitio web publico de RiBuzz construido con Next.js App Router, TypeScript y Tailwind CSS.

## Backend Foundation

La base backend ya queda preparada para produccion ligera sobre Supabase:

- validacion estricta de entorno
- clientes Supabase separados por contexto
- migraciones SQL reproducibles
- capas `repository/service`
- rutas API publicas y admin-ready
- RLS, rate limiting compartido, honeypot y proteccion anti-spam

## Variables de entorno requeridas

Copia `.env.example` a `.env.local` y completa:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
SENSITIVE_FIELD_ENCRYPTION_KEY=replace-with-a-base64-32-byte-key
INTERNAL_HEALTHCHECK_TOKEN=replace-with-a-long-random-health-token
TRUSTED_IP_HEADER=x-vercel-forwarded-for
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

Notas:

- `SENSITIVE_FIELD_ENCRYPTION_KEY` debe ser una clave de 32 bytes codificada en base64. Se usa para cifrar `email`, `whatsapp` y `contexto` antes de persistirlos.
- `INTERNAL_HEALTHCHECK_TOKEN` protege `GET /api/health` en produccion.
- `TRUSTED_IP_HEADER` debe apuntar al header real de tu proxy o plataforma. El valor por defecto esta pensado para Vercel.
- Si vas a habilitar los endpoints publicos de captura en produccion, configura Turnstile. El backend ahora falla cerrado cuando esa proteccion no esta disponible en produccion.

## Supabase Setup

1. Crea un proyecto en Supabase.
2. Toma `Project URL`, `anon key` y `service role key`.
3. Ejecuta las migraciones SQL ubicadas en `supabase/migrations/`.
4. Crea perfiles internos en `auth.users` y luego inserta sus filas en `public.admin_profiles`.
5. Usa sesion autenticada de Supabase para consumir rutas admin. Ya no existe bypass por llave compartida para `api/admin/*`.
6. Configura `INTERNAL_HEALTHCHECK_TOKEN` en tu entorno de despliegue si quieres monitorear `GET /api/health`.

## Como correr migraciones

Si usas la CLI de Supabase:

```bash
supabase db push
```

Si todavia no usas la CLI, puedes ejecutar la migracion SQL directamente en el SQL Editor de Supabase.

## Endpoints preparados

Publicos:

- `POST /api/diagnostic-request` reservado; actualmente responde deshabilitado en este sitio
- `POST /api/track-cta`
- `GET /diagnostico` mantiene el diagnostico visible dentro del sitio mediante un embed temporal de Google Forms.

Interno:

- `GET /api/health`

Admin autenticado:

- `GET /admin/login`
- `GET /admin/solicitudes`
- `GET /api/admin/diagnostic-requests`
- `PATCH /api/admin/diagnostic-requests/[id]`

## Seguridad

- `SUPABASE_SERVICE_ROLE_KEY` se usa solo en archivos server-only.
- El cliente browser solo usa `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Las tablas sensibles tienen RLS activado.
- No hay acceso publico directo a tablas de leads.
- Las rutas publicas validan con Zod, soportan honeypot y exigen proteccion anti-spam en produccion.
- Los campos sensibles del diagnostico se cifran antes de guardarse y se descifran solo al salir por DTOs administrativos autorizados.
- Las rutas admin dependen de sesion real y respetan RLS; no usan una llave maestra compartida.
- El rate limiting publico se comparte via Supabase para no depender de memoria local.
- Las respuestas admin salen con DTOs acotados para evitar exponer hashes internos de deduplicacion.
- Se agrega una CSP base y un header de IP confiable configurable por entorno.

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
