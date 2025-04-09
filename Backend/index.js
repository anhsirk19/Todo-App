const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/todo", (req, res) => {
    res.status(300).send("hi ther");
})

app.get("/todos", (req, res) => {
    res.status(200).send("todos");
})

app.get("/completed", (req, res) => {
    res.status(200).send("completed todo");
})

app.listen(port, () => {
    console.log(`running on port` + port);
})