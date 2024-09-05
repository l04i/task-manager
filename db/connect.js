const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://l04i:134679582@cluster0.cqprq.mongodb.net/task-manager';




const connectToDB = (dbURI) => {
    return mongoose.connect(dbURI);
}

module.exports = connectToDB;