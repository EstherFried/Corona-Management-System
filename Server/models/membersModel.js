const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
    full_name: String,
    id_number: String,
    address: {
        city: String,
        street: String,
        number: String
    },
    date_of_birth: Date,
    phone: String,
    mobile_phone: String,
    vaccinations:
        [{
            vaccine_date: Date,
            vaccine_manufacturer: String
        }],
    positive_result_date: Date,
    recovery_date: Date
})

const model = mongoose.model('members', memberSchema);
module.exports = model;