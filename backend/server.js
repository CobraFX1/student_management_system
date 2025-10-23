import express from 'express';
import db from './db.js';
import studentRoutes from './routes/students.js';



const app = express();
app.use(express.json());
app.use('/api/students', studentRoutes);
// Test route
app.get('/', (req, res) => {
  res.send('Backend server is running...');
});

// Database test route
app.get('/test-db', (req, res) => {
  db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database test failed');
    }
    res.send(`Database test successful. Result: ${results[0].result}`);
  });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
