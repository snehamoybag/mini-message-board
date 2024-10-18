const pool = require("./pool");

exports.getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
};

exports.getMessage = async (messageId) => {
  const query = "SELECT * FROM messages WHERE id = $1";
  const { rows } = await pool.query(query, [messageId]);
  return rows[0]; // only gonna have one item
};

exports.addMessage = async (text, author, date) => {
  const query = "INSERT INTO messages (text, author, date) VALUES($1, $2, $3)";
  await pool.query(query, [text, author, date]);
};
