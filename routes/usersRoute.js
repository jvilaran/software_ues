import express from 'express';
import UsersController from '../controllers/usersController.js';
import { verifyToken } from '../helpers/authenticationHelper.js';

const router = express.Router();

// Sample route for users
router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.get('/profile', verifyToken, UsersController.profile);
router.get('/', UsersController.getAll);
router.get('/:id', UsersController.getUser);

export default router;