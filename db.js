const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postger6233614780',
  port: 5432,
  database: 'productsdb',
});

module.exports = pool;
