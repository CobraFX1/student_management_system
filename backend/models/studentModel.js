import db from '../db.js';

// Get all students
export const getAllStudents = (callback) => {
  db.query('SELECT * FROM student', callback);
};

// Get a student by ID
export const getStudentById = (id, callback) => {
  db.query('SELECT * FROM student WHERE StudentID = ?', [id], callback);
};

// Create a student
export const createStudent = (data, callback) => {
  db.query(
    'INSERT INTO student (Name, Email, DepartmentID) VALUES (?, ?, ?)',
    [data.name, data.email, data.department],
    callback
  );
};

// Update a student
export const updateStudent = (id, data, callback) => {
  db.query(
    'UPDATE student SET Name=?, Email=?, DepartmentID=? WHERE StudentID=?',
    [data.name, data.email, data.department, id],
    callback
  );
};

// Delete a student
export const deleteStudent = (id, callback) => {
  db.query('DELETE FROM student WHERE StudentID=?', [id], callback);
};
