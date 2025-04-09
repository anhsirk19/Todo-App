const mongoose = require("mongoose");

//mongodb+srvpp

const connnectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to Database ${mongoose.connection.host}`.bgCyan)
    }catch(e){
        console.log("DB error", e);
    }
}

connnectDb()

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}