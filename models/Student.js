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
    }
});

module.exports = mongoose.model('Student', studentSchema);