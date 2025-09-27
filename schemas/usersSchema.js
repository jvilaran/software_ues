import { mongoose } from 'mongoose';

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const usersSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/\S+@\S+\.\S+/, 'Please fill a valid email address']
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: Number,
            required: false,
            trim: true,
        }
    }, { timestamps: true }
);

export default mongoose.model('users', usersSchema);