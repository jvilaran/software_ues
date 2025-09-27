import express from 'express';
import GamesController from '../controllers/gamesController.js';

const router = express.Router();

// Sample route for games
router.post('/', GamesController.create);
router.get('/:id', GamesController.get);
router.get('/', GamesController.getAll);
router.put('/:id', GamesController.put);
router.delete('/:id', GamesController.delete);

export default router;