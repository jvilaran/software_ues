import gamesSchema from '../schemas/gamesSchema.js'
import { mongoose } from 'mongoose';

class gamesModel {
    constructor() {
    }

    async create(data) {
        return await gamesSchema.create(data);
    }

    async getAll() {
        return await gamesSchema.find({});
    }

    async get(id) {
        return await gamesSchema.findById(id);
    }

    async update(id, data) {
        return await gamesSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, data, {new: true});
    }

    async delete(id) {
        return await gamesSchema.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }

}

export default new gamesModel();