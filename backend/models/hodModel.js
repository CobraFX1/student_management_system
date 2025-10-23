import db from '../db.js';

export const getAllHODs = (callback) => {
  db.query('SELECT * FROM HOD', callback);
};

export const getHODById = (id, callback) => {
  db.query('SELECT * FROM HOD WHERE HODID = ?', [id], callback);
};

export const createHOD = (data, callback) => {
  db.query('INSERT INTO HOD (Name, Email, DepartmentID) VALUES (?, ?, ?)', [data.name, data.email, data.departmentId], callback);
};

export const updateHOD = (id, data, callback) => {
  db.query('UPDATE HOD SET Name=?, Email=?, DepartmentID=? WHERE HODID=?', [data.name, data.email, data.departmentId, id], callback);
};

export const deleteHOD = (id, callback) => {
  db.query('DELETE FROM HOD WHERE HODID=?', [id], callback);
};
