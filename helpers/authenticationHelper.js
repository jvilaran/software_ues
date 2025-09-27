import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';

export function generateToken(username) {
    return jsonwebtoken.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export function verifyToken(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log(token);

    if(!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const dataToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        req.username = dataToken.username;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Access denied. Invalid token.' });
    }

    
}