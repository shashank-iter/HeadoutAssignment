const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Headout! This is a Optimized HTTP Server. Please hit /data?n={value}&m={value} to get the data of nth file at mth line or /data?n={value} to get the entire file");
});

app.use("/", require("./routes/index.route.js"));
module.exports = app;
