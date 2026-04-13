# RiBuzz

Sitio web publico de RiBuzz construido con Next.js App Router, TypeScript y Tailwind CSS.

## Backend Foundation

La base backend ya queda preparada para produccion ligera sobre Supabase:

- validacion estricta de entorno
- clientes Supabase separados por contexto
- migraciones SQL reproducibles
- capas `repository/service`
- rutas API publicas y admin-ready
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

## Endpoints preparados

Publicos:

- `POST /api/diagnostic-request`
- `POST /api/track-cta`
- `GET /api/health`

Admin / internal:

- `GET /api/admin/diagnostic-requests`
- `PATCH /api/admin/diagnostic-requests/[id]`

## Seguridad

- `SUPABASE_SERVICE_ROLE_KEY` se usa solo en archivos server-only.
- El cliente browser solo usa `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Las tablas sensibles tienen RLS activado.
- No hay acceso publico directo a tablas de leads.
- Las rutas publicas validan con Zod, soportan honeypot y pueden validar Turnstile.
- Hay rate limiting en memoria listo para reemplazarse por Redis/Upstash si mas adelante hace falta distribucion real.

## Desarrollo

```bash
npm install
npm run dev
```

Para validar build con variables de entorno reales o placeholder bien formadas:

```bash
npm run build
```
