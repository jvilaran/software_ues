import 'dotenv/config';
import express from 'express';
import gamesRouter from './routes/gamesRoute.js';
import usersRouter from './routes/usersRoute.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/games', gamesRouter);
app.use('/users', usersRouter);

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error('Error starting server:', error);
}

process.on('SIGINT', async () => {
    await dbClient.disconnect();
    process.exit(0);
});