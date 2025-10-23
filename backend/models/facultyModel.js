import db from '../db.js';

export const getAllFaculties = (callback) => {
  db.query('SELECT * FROM Faculty', callback);
};

export const getFacultyById = (id, callback) => {
  db.query('SELECT * FROM Faculty WHERE FacultyID = ?', [id], callback);
};

export const createFaculty = (data, callback) => {
  db.query('INSERT INTO Faculty (Name) VALUES (?)', [data.name], callback);
};

export const updateFaculty = (id, data, callback) => {
  db.query('UPDATE Faculty SET Name=? WHERE FacultyID=?', [data.name, id], callback);
};

export const deleteFaculty = (id, callback) => {
  db.query('DELETE FROM Faculty WHERE FacultyID=?', [id], callback);
};
