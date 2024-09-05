const mongoose = require('mongoose');
const TaskShcema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskShcema);
module.exports = Task;