import db from '../db.js';

export const getAllAssignments = (callback) => {
  db.query('SELECT * FROM assignment', callback);
};

export const getAssignmentById = (id, callback) => {
  db.query('SELECT * FROM assignment WHERE AssignmentID = ?', [id], callback);
};

export const createAssignment = (data, callback) => {
  db.query('INSERT INTO assignment (StudentID, CourseID, HODID) VALUES (?, ?, ?)',
    [data.studentId, data.courseId, data.hodId], callback);
};

export const updateAssignment = (id, data, callback) => {
  db.query('UPDATE assignment SET StudentID=?, CourseID=?, HODID=? WHERE AssignmentID=?',
    [data.studentId, data.courseId, data.hodId, id], callback);
};

export const deleteAssignment = (id, callback) => {
  db.query('DELETE FROM assignment WHERE AssignmentID=?', [id], callback);
};
