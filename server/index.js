// server/server.js

import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the routes
app.use('/api', routes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
