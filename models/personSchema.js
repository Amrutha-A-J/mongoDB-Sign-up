var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/auth_db');
var personSchema = mongoose.Schema({
    name: String,
    password : String
});
module.exports = mongoose.model("Person",personSchema);