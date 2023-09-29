const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: process.env.user,
  password: process.env.password,
  port: process.env.pg_port,
  database: process.env.database,
});

module.exports = pool;
