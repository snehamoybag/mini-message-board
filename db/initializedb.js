#! /user/bin/env node

const { Client } = require("pg");

const SQL_CREATE_TABLES = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    author VARCHAR(255),
    text TEXT,
    date TIMESTAMP 
  );
`;

const main = async () => {
  const connectionString = process.argv[2];

  const client = new Client({
    connectionString: connectionString,
  });

  console.log("Connecting to the database ...");
  await client.connect();

  console.log("Creating tables ...");
  await client.query(SQL_CREATE_TABLES);

  console.log("Populating the database ...");

  await client.end();
  console.log("done");
};

main();
