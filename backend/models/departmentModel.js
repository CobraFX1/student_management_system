import db from '../db.js';

export const getAllDepartments = (callback) => {
  db.query('SELECT * FROM Department', callback);
};

export const getDepartmentById = (id, callback) => {
  db.query('SELECT * FROM Department WHERE DepartmentID = ?', [id], callback);
};

export const createDepartment = (data, callback) => {
  db.query('INSERT INTO Department (Name, FacultyID) VALUES (?, ?)', [data.name, data.facultyId], callback);
};

export const updateDepartment = (id, data, callback) => {
  db.query('UPDATE Department SET Name=?, FacultyID=? WHERE DepartmentID=?', [data.name, data.facultyId, id], callback);
};

export const deleteDepartment = (id, callback) => {
  db.query('DELETE FROM Department WHERE DepartmentID=?', [id], callback);
};
