const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Lista predeterminada de orígenes permitidos
const defaultOrigins = [
  '   ',
  'http://localhost:3000', // Para desarrollo local
];

// Obtener orígenes de la variable de entorno o usar los predeterminados
const allowedOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean)
  .concat(defaultOrigins); // Combinar con los predeterminados

app.use(cors({
  origin: function (origin, callback) {
    // Permitir solicitudes sin origen (como Postman o cURL)
    if (!origin) return callback(null, true);
    // Verificar si el origen está permitido
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    const msg = 'El origen de la solicitud no está permitido por la política CORS';
    return callback(new Error(msg), false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json());
app.use('/api/auth', routes);

const PORT = process.env.PORT || 4000;
app.get('/api/auth/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`✅ Auth Service corriendo en http://localhost:${PORT}`);
});