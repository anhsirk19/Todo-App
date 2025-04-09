const mongoose = require("mongoose");

//mongodb+srvpp

mongoose.connect(process.env.MONGO_URL);

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}