// connector.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_db_user', // Replace with your database user
  password: 'your_db_password', // Replace with your database password
  database: 'your_db_name' // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database.');
  }
});

module.exports = connection;
