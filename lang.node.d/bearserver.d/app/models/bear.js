// app/models/bear.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
    // _id: String,
    // id: String,
    name: String,
    created_at: Date
});

module.exports = mongoose.model('Bear', BearSchema);