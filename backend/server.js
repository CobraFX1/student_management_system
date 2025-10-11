const express = require('express');
const app = express();
const PORT = 5000;

const db = require('./db'); // <--- Database connection

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Student Management System Backend is Running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
