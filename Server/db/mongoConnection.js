const mongoose = require('mongoose');
require('dotenv').config();

async function MongooseConenction() {
    await mongoose.connect(process.env.DB_CONNECTION);
}

module.exports = MongooseConenction;