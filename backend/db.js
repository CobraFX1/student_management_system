const mysql = require('mysql2');

// Create a connection to MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // leave empty for XAMPP default
  database: 'student_management'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL database.');
});

module.exports = connection;
