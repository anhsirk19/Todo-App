const express = require("express");
const { createTodo, updateTodo} = require("./types.js");
const { todo } = require("./db.js");
const app = express();
require('dotenv').config()

const port = 3000;

app.use(express.json());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "you sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed: false
    })
    res.json({
        msg : " todo created !"
    })
})

app.get("/todos", async (req, res) => {
    const todoData = await todo.find({});

    res.json({
        todoData
    })
 })

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        req.status(411).send({
            msg : " you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id : req.body.id
    }, {
        completed : true
    })
    res.json({
        msg : "Todo marked as completed"
    })
})

app.listen(port, () => {
    console.log(`running on port` + port);
})