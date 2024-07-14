import express from 'express'
import { signup, singin, google, signout } from '../controllers/auth.controler.js';


const router = express.Router();

router.post('/signup', signup);
router.post('/signin', singin);
router.post('/google', google);
router.get('/signout', signout)

export default router;