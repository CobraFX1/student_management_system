import db from '../db.js';

export const getAllStudents = (callback) => {
  db.query('SELECT * FROM students', callback);
};

export const getStudentById = (id, callback) => {
  db.query('SELECT * FROM students WHERE id = ?', [id], callback);
};

export const createStudent = (data, callback) => {
  db.query('INSERT INTO students (name, email, department) VALUES (?, ?, ?)',
    [data.name, data.email, data.department], callback);
};

export const updateStudent = (id, data, callback) => {
  db.query('UPDATE students SET name=?, email=?, department=? WHERE id=?',
    [data.name, data.email, data.department, id], callback);
};

export const deleteStudent = (id, callback) => {
  db.query('DELETE FROM students WHERE id=?', [id], callback);
};
