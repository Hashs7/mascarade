const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flashSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    studentsFrom: [{
        number: Number,
        student: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
        }
    }],
    studentsTo: [{
        number: Number,
        student: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
        }
    }]
});

module.exports = mongoose.model('Flash', flashSchema);