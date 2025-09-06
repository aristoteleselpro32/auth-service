const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
// CORS configurado por variable de entorno (coma separada)
const allowedOrigins = (process.env.CORS_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
app.use(cors({
  origin: allowedOrigins.length ? allowedOrigins : true,
  credentials: true
}));
app.use(express.json());
app.use('/api/auth', routes);

const PORT = process.env.PORT || 4000;
app.get('/api/auth/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`✅ Auth Service corriendo en http://localhost:${PORT}`);
});