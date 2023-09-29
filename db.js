const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.HOST || 'localhost',
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PG_PORT,
  database: process.env.DATABASE,
});

module.exports = pool;
