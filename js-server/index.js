const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001;

const tasks = ["Write a diary entry from the future", "Create a time machine from a cardboard box", "Plan a trip to the dinosaurs", "Draw a futuristic city", "List items to bring on a time-travel adventure"];

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/tasks", (req, res) => {
    const { text } = req.body;
    tasks.push(text);
    res.send({"message": "Task added successfully"});
});

app.get("/tasks", (req, res) => {
    res.send({"tasks": tasks});
});



app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
