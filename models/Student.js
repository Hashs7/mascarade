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
    quizz: {
        type: Array,
        required: true
    },
    slider: {
        type: Number,
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
    dialog: {
        celebrity: {
            conversation: {
                type: Array,
                required: false
            },
            state: {
                type: String,
                required: false
            }
        },
        hacker: {
            conversation: {
                type: Array,
                required: false
            },
            state: {
                type: String,
                required: false
            }
        }
    },
    harassment: {
        action: {
            type: String,
            required: false
        }
    },
    fakeNews: {
        action: {
            type: String,
            required: false
        }
    },
    flash: {
        required: false,
        type: Schema.Types.ObjectId,
        ref: 'Flash',
    }
});

module.exports = mongoose.model('Student', studentSchema);