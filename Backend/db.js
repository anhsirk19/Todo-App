const mongoose = require("mongoose");

//mongodb+srv://krishna:krishna@cluster0.cjxsr.mongodb.net/todoApp

mongoose.connect("mongodb+srv://krishna:krishna@cluster0.cjxsr.mongodb.net/todoApp")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}