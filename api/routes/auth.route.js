import express from 'express'
import { signup, singin, google } from '../controllers/auth.controler.js';


const router = express.Router();

router.post('/signup', signup)
router.post('/signin', singin)
router.post('/google', google);

export default router;