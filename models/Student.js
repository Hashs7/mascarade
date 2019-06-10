const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    roomId: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        required: true
    },
    achievements: {
        points: Number,
        shares: Number,
        reports: Number
    },
    charity: {
        type: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        }
    },
    harassment: {
        action: String
    },
    flash: {
        required: false,
        type: Schema.Types.ObjectId,
        ref: 'Flash',
    }
});

module.exports = mongoose.model('Student', studentSchema);