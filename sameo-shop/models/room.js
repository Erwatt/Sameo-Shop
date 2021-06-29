const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name : {type : String, required : true},
    client : {type : String, required : true},
    isLocked : {type: Boolean, required: true}
});

module.exports = mongoose.model('room', roomSchema);