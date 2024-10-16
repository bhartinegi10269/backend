// createDatabase.js
const mysql = require('mysql2');
const connection = require('./connector');

const createDatabase = async () => {
  const createDbQuery = 'CREATE DATABASE IF NOT EXISTS your_db_name';
  const useDbQuery = 'USE your_db_name';
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      description TEXT
    )
  `;
  const insertDataQuery = `
    INSERT INTO orders (title, description) VALUES
    ('Order 1', 'Description for Order 1'),
    ('Order 2', 'Description for Order 2'),
    ('Order 3', 'Description for Order 3'),
    ('Order 4', 'Description for Order 4'),
    ('Order 5', 'Description for Order 5'),
    ('Order 6', 'Description for Order 6')
  `;
  connection.query(createDbQuery, (err) => {
    if (err) throw err;

    connection.query(useDbQuery, (err) => {
      if (err) throw err;
       
      connection.query(createTableQuery, (err) => {
        if (err) throw err;

        connection.query(insertDataQuery, (err) => {
          if (err) throw err;

          console.log('Database and table created, sample data inserted.');
          connection.end();
        });
      });
    });
  });
};
createDatabase();
