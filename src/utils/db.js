const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'kirk'
});

connection.connect(function(err) {
  if (err) {
    return;
  }
  console.log('Database connected.');
});

export const initDatabase = () => {
  return new Promise(function(resolve, reject) {
    const query = 'CREATE TABLE IF NOT EXISTS users(' +
      'id INT AUTO_INCREMENT PRIMARY KEY, ' +
      'name VARCHAR(255) NOT NULL, ' +
      'email VARCHAR(255) NOT NULL, ' +
      'password VARCHAR(255) NOT NULL)';

    connection.query(query, function(err, result) {
      if (err){
        console.log(err);
        reject(err);
        return;
      }
      console.log(result);
      resolve(result);
    })
  })
};

export const insertUser = (name, email, password) => {
  return new Promise(function(resolve, reject) {
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    connection.query(query, [name, email, password], function(err, result) {
      if (err) {
        reject(err);
        return;
      }
      console.log(result);
      resolve(true);
    })

  })
};

export const checkUser = (email, password) => {
  return new Promise(function(resolve, reject) {
    const query = `SELECT *FROM users WHERE email = ? and password = ?`;

    connection.query(query, [email, password],  function(err, result) {
      if (err) {
        reject(err);
        return;
      }
      console.log(result);
      resolve(result);
    })

  })
};
