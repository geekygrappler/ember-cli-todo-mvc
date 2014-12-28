// models/todo.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var TodoSchema = new Schema({
    title: String,
    isCompleted: Boolean
});
 
module.exports = mongoose.model('Todo', TodoSchema);