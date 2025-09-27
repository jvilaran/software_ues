import { MongoClient } from "mongodb";
import mongoose from "mongoose";

class DBClient {
    constructor() {
        this.connect();
    }

    async connect() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/videogames?retryWrites=true&w=majority`;
        /* this.client = new MongoClient(queryString); */
        await mongoose.connect(queryString);
    }

    async disconnect() {
        try {
            await mongoose.disconnect();
        } catch (error) {
            console.error('Error disconnecting from database:', error);
        }
    }
}

export default new DBClient();