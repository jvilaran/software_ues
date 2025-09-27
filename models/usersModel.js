import usersSchema from '../schemas/usersSchema.js'
import { mongoose } from 'mongoose';

class UsersModel {
    constructor() {
    }

    async register(data) {
        return await usersSchema.create(data);
    }

    async getAll() {
        return await usersSchema.find({});
    }

    async getById(id) {
        return await usersSchema.findById(id);
    }

    async getOne(filter) {
        return await usersSchema.findOne(filter);
    }

    async update(id, data) {
        return await usersSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, data, {new: true});
    }

    async delete(id) {
        return await usersSchema.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }

}

export default new UsersModel();