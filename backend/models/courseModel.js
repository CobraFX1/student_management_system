import db from '../db.js';

export const getAllCourses = (callback) => {
  db.query('SELECT * FROM Course', callback);
};

export const getCourseById = (id, callback) => {
  db.query('SELECT * FROM Course WHERE CourseID = ?', [id], callback);
};

export const createCourse = (data, callback) => {
  db.query('INSERT INTO Course (Code, Title, CreditUnits, DepartmentID) VALUES (?, ?, ?, ?)', 
    [data.code, data.title, data.creditUnits, data.departmentId], callback);
};

export const updateCourse = (id, data, callback) => {
  db.query('UPDATE Course SET Code=?, Title=?, CreditUnits=?, DepartmentID=? WHERE CourseID=?', 
    [data.code, data.title, data.creditUnits, data.departmentId, id], callback);
};

export const deleteCourse = (id, callback) => {
  db.query('DELETE FROM Course WHERE CourseID=?', [id], callback);
};
