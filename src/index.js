const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Permitir todos los orígenes
app.use(cors({
  origin: '*', // Permite solicitudes desde cualquier origen
  credentials: true // Necesario si usas cookies o tokens
}));
app.use(express.json());
app.use('/api/auth', routes);

const PORT = process.env.PORT || 4000;
app.get('/api/auth/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`✅ Auth Service corriendo en http://localhost:${PORT}`);
});