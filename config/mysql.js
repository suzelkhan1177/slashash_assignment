const mysql = require('mysql2/promise');
const logger = require('./logger');
require('dotenv').config();

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database:  process.env.DB_NAME,
  port: 3306,
});

logger.info('Connected to the MySQL database mysql2'); 

pool.on('error', (err) => {
  logger.error('MySQL database connection error:', err);
});

module.exports = pool;