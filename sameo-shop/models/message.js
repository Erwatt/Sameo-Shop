const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    customer : {type: String, required: true},
    object: {type: String, required: true},
    message: {type: String, required: true},
    is_New: {type: Boolean, required: true}
});


module.exports = mongoose.model('message', messageSchema);