const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    customer : {type: String, required: true},
    object: {type: String, required: true},
    message: {type: String, required: true}
});


module.exports = mongoose.model('message', messageSchema);