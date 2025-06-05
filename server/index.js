import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// CORS setup
const corsOptions = {
  origin: [
    process.env.Client_APP_URL || 'https://mbilalhussain15.github.io', 
    'https://mbilalhussain15.github.io/Portfolio', 'http://localhost:5173'
  ],  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.use('/api', routes);




// // Serve static assets with proper MIME types
// app.use('/Portfolio/assets', express.static(
//   path.join(__dirname, '../client/build/assets'),
//   {
//     setHeaders: (res, path) => {
//       if (path.endsWith('.js')) {
//         res.set('Content-Type', 'application/javascript')
//       }
//     }
//   }
// ))

// // Serve other static files
// app.use('/Portfolio', express.static(path.join(__dirname, '../client/build')))

// // Handle client-side routing
// app.get('/Portfolio/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
// })







// Start Server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}/Portfolio`);
});
