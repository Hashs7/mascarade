const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    shortId: {
        type: String,
        required: true
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student',
    }]
});

module.exports = mongoose.model('Session', sessionSchema);