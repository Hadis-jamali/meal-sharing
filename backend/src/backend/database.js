require("dotenv").config();
// create connection
const knex = require("knex")({
  client: "postgres",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "lol",
    database: process.env.DB_NAME || "postgres",
  },
  // pool: { min: 0, max: 7 },
  pool: { min: 2, max: 10 },
});

// Check that the connection works
knex.raw("SELECT VERSION()").then(() => {
  console.log(`connection to db successful!`);
});

module.exports = knex;
