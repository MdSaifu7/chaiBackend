require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("<h1>Ki Holo</h1>");
});
app.get("/twitter", (req, res) => {
  return res.send("<h1>Elon Bhai</h1>");
});

app.get("/dahi", (req, res) => {
  console.log(process.env.lodo);

  return res.send("<h1>Dahi mattha khalo friends</h1>");
});
app.listen(process.env.PORT, (req, res) => {
  console.log("server Started");
});
