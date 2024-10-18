const { getAllMessages } = require("../db/queries");

exports.get = async (req, res) => {
  const messages = await getAllMessages();
  res.render("index", { title: "Mini Message Board", messages: messages });
};
