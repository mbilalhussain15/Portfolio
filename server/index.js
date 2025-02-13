import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import dotenv from 'dotenv';
import path from "path";

dotenv.config();

const app = express();
const port = process.env.Server_Port || 5000;

// CORS setup
const corsOptions = {
  origin: process.env.Client_APP_URL || 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  
  credentials: true, 
};

app.use(cors(corsOptions));


app.use(express.json());


app.use('/api', routes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
