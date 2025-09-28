import UsersModel from '../models/usersModel.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../helpers/authenticationHelper.js';
import ViewFactory from '../helpers/viewFactory.js';

class UsersController {
    constructor() {
        // Initialize any required properties here
    }

    async register(req, res) {
        try {
            const { username, email, phone, password } = req.body;

            const userExists = await UsersModel.getOne({ email });
            if (userExists) {
                return res.status(400).json({ message: 'User already exists' });
            }
            
            const passCypted = await bcrypt.hash(password, 10);

            const data = await UsersModel.register({ 
                username, 
                email, 
                phone, 
                password: passCypted 
            });

            res.status(201).json({ msg: "User registered!", data });
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getAll(req, res) {
        try {
            const data = await UsersModel.getAll();

            // Usar Factory Method para generar la vista HTML
            const html = ViewFactory.usersListView(data);
            if (!data) {
                return res.status(404).send(html);
            }
            res.status(200).send(html);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getUser(req, res) {
        try {
            const { id } = req.params;
            const data = await UsersModel.getById(id);

            // Usar Factory Method para generar la vista HTML
            const html = ViewFactory.createView('user', data);
            if (!data) {
                return res.status(404).send(html);
            }
            res.status(200).send(html);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;

            const userExists = await UsersModel.getOne({ username });
            if (!userExists) {
                return res.status(400).json({ message: 'User does not exist' });
            }

            const passConfirm = await bcrypt.compare(password, userExists.password);
            if(!passConfirm) {
                return res.status(400).json({ message: 'Incorrect password' });
            }

            const token = generateToken(username);

            res.status(200).json({ msg: "Login successful", token });
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async profile(req, res) {
        try {
            const data = await UsersModel.getOne({ username: req.username });

            if (!data) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ msg: "User profile", data });
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new UsersController();