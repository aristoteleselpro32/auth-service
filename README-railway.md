# Auth Service – Despliegue en Railway

## Variables de entorno requeridas
- `SUPABASE_URL`
- `SUPABASE_API_KEY`
- `JWT_SECRET`
- `CORS_ORIGINS` (ej: `https://tu-frontend.app, http://localhost:3000`)
- `FRONTEND_URL` (opcional)

## Comandos
- `npm start` – inicia en producción (`node src/index.js`)

## Puertos
La app escucha en `process.env.PORT` si está definido (Railway lo define automáticamente).

## Salud
`GET /api/auth/health` -> `{ ok: true }`
