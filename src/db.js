const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'IntelsiDB',
  password: '',
  port: 5431, 
});

module.exports = pool;
