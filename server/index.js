import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// CORS setup
const corsOptions = {
  origin: process.env.Client_APP_URL || 'https://mbilalhussain15.github.io/Portfolio/#/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.use('/api', routes);


// Start Server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
