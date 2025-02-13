import { getAllBackground } from "../models/backgroundModel.js";
import { getAllExpertise } from "../models/expertiseModel.js";
import { getAllRecommendation } from "../models/recommendationsModel.js";
import { getAllReviews } from "../models/reviewModel.js";
import { getPortfolio } from "../models/portfolioModel.js";
import { getAllTechStack } from "../models/skillModel.js";
import { sendEmail } from "../utils/mailer.js";

// Controller for getting all reviews
export const getReviews = (req, res) => {
    try {
        const reviews = getAllReviews();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const getBackground = (req, res) => {
    try {
        const background = getAllBackground();
        res.status(200).json(background);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getExpertise = (req, res) => {
    try {
        const expertise = getAllExpertise();
        res.status(200).json(expertise);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPortfolio0 = (req, res) => {
    try {
        const portfolio = getPortfolio();
        res.status(200).json(portfolio);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }    
}

export const getRecommendations = (req, res) => {
    try {
        const recommendations = getAllRecommendation();
        res.status(200).json(recommendations);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTechStack = (req, res) => {
    try {
        const { category } = req.query; // Get category from query params

        const techStack = getAllTechStack();

        if (category && techStack[category]) {
            return res.status(200).json(techStack[category]); // Return specific category
        }

        // If no category or invalid category is provided, return all tech stack data
        return res.status(200).json(techStack);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const handleSendEmail = async (req, res) => {
    const {email, subject, message } = req.body;

    try {
        const info = await sendEmail(email, subject, message); 
        res.status(200).send({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).send({ success: false, message: 'Failed to send email', error });
    }
};