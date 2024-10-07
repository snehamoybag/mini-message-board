const express = require("express");
const path = require("node:path");

const indexRouter = require("./routes/index");
const newMessageRouter = require("./routes/newMessage");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
const PORT = 3000;

app.listen(PORT, () => "Server is listening on Port 3000");
