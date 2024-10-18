const { getMessage } = require("../db/queries");

exports.messageGet = async (req, res) => {
  const message = await getMessage(req.params.id);
  res.render("fullMessage", { message: message });
};
