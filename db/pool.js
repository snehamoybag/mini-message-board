require("dotenv").config();
const { Pool } = require("pg");

const { DB_ROLE_NAME, DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const pool = new Pool({
  user: DB_ROLE_NAME,
  database: DB_NAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
});

module.exports = pool;
