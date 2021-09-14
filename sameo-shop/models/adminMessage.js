const mongoose = require("mongoose");

const adminMessageSchema = mongoose.Schema({
    message: {type: String, required: true},
    customer: {type: String, required: true},
    isPopUp: {type: Boolean, required: true}
});

module.exports = mongoose.model('adminMessage', adminMessageSchema);