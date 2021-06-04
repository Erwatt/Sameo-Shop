const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    firstname : {type: String, required: true},
    name : {type: String, required: true}
});

module.exports = mongoose.model('customer', customerSchema);