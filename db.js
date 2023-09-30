const { Client } = require('pg');

// Create a new PostgreSQL client
const client = new Client({
  connectionString: process.env.POSTGER_URL,
});

// Connect to the PostgreSQL database
client
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL:', err);
  });
module.exports = client;
