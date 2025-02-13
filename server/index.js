import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Convert __dirname to ES module format
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS setup
const corsOptions = {
  origin: process.env.CLIENT_APP_URL || 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.use('/api', routes);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

// Start Server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
