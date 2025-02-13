// server/routes/reviewRoutes.js

import { Router } from 'express';
import { getBackground, getExpertise, getPortfolio0, getRecommendations, getReviews, getTechStack, handleSendEmail } from '../controllers/controller.js';

const router = Router();

// Route to get all
router.get('/review', getReviews);
router.get('/background', getBackground);
router.get('/expertise', getExpertise);
router.get('/portfolio', getPortfolio0);
router.get('/recommendations', getRecommendations);
router.get('/skills', getTechStack);
router.post('/sendEmail', handleSendEmail); 
export default router;
