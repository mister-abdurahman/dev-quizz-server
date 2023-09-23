const express = require("express");
const fs = require("fs");

const app = express();

const PORT = 3000;

const data = fs.readFileSync(`${__dirname}/data/questions.json`, "utf-8");
const parsedData = JSON.parse(data);

app.get("/", (req, res) => {
  res.status(200).json("Welcome to the dev-quizz server");
});

app.get("/questions", (req, res) => {
  res.status(200).json(parsedData.questions);
});

app.get("*", (req, res) => {
  res.status(404).json("Route does not exist");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
