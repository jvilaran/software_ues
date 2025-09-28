import express from 'express';
import GamesController from '../controllers/gamesController.js';

const router = express.Router();

// Sample route for games
router.post('/', GamesController.create);
router.get('/', GamesController.getAll);
router.get('/:id', GamesController.get);
router.put('/:id', GamesController.put);
router.delete('/:id', GamesController.delete);

export default router;