const express = require("express");
const path = require("node:path");

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");
const messagesRouter = require("./routes/messages");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// make req.body work as intended
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRouter);

app.use("/new", newRouter);

app.use("/messages", messagesRouter);

// render 404 page if no route is matching
app.get("*", (req, res) => res.render("404"));

const PORT = 3000;

app.listen(PORT, () => console.log("Server is listening on Port 3000"));
