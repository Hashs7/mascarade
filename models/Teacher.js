const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sessions: [{
        type: Schema.Types.ObjectId,
        ref: 'Session',
        required: false
    }]
});

module.exports = mongoose.model('Teacher', teacherSchema);