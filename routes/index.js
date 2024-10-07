const { Router } = require("express");

const router = Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/messages/message/:id", (req, res) => {
  res.render(
    "message",
    messages.find((message) => message.id === Number(req.params.id))
  );
});

router.post("/new", (req, res) => {
  const { author, message } = req.body;

  messages.push({
    id: messages[messages.length - 1].id + 1,
    text: message,
    user: author,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
