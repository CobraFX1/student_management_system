import express from 'express';
import db from './db.js';
import studentRoutes from './routes/studentRoutes.js';
import facultyRoutes from './routes/faculty.js';
import departmentRoutes from './routes/department.js';
import hodRoutes from './routes/hod.js';
import courseRoutes from './routes/course.js';
import assignmentRoutes from './routes/assignment.js';
import adminRoutes from './routes/admin.js';
const app = express();
app.use(express.json());

// Student routes
app.use('/api/students', studentRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/department', departmentRoutes);
app.use('/api/hod', hodRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/assignment', assignmentRoutes);
app.use('/api/admin', adminRoutes);

// Root route
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

// Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
