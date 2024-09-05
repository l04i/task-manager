const mongoose = require('mongoose');

const connectToDB = (dbURI) => {
    return mongoose.connect(dbURI);
}

module.exports = connectToDB;