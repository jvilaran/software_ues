import GamesModel from '../models/gamesModel.js';

class GamesController {
    constructor() {
        // Initialize any required properties here
    }

    async create(req, res) {
        try {
            const data = await GamesModel.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async get(req, res) {
        try {
            const { id } = req.params;
            const data = await GamesModel.get(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getAll(req, res) {
        try {
            const data = await GamesModel.getAll();
            
            // Usar Factory Method para generar la vista HTML
            const html = ViewFactory.gamesListView(data);
            if (!data) {
                return res.status(404).send(html);
            }
            res.status(200).send(html);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async put(req, res) {
        try {
            const id = req.params.id;
            const body = req.body;
            const data = await GamesModel.update(id, body);
            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const data = await GamesModel.delete(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new GamesController();