const { addMessage } = require("../db/queries");

exports.get = (req, res) => {
  res.render("form", { title: "Add New Message" });
};

exports.messagePost = async (req, res) => {
  const { messageAuthor, messageText } = req.body;

  await addMessage(messageText, messageAuthor, new Date());

  res.redirect("/");
};
