var mongoose = require('mongoose');

var ReduxSchema = new mongoose.Schema({
 name: String
});
var Redux = mongoose.model('Redux', ReduxSchema);