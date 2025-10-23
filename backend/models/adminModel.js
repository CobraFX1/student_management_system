import db from '../db.js';

export const getAllAdmins = (callback) => {
  db.query('SELECT * FROM Admin', callback);
};

export const getAdminById = (id, callback) => {
  db.query('SELECT * FROM Admin WHERE AdminID = ?', [id], callback);
};

export const createAdmin = (data, callback) => {
  db.query('INSERT INTO Admin (Name, Email, PasswordHash) VALUES (?, ?, ?)', [data.name, data.email, data.passwordHash], callback);
};

export const updateAdmin = (id, data, callback) => {
  db.query('UPDATE Admin SET Name=?, Email=?, PasswordHash=? WHERE AdminID=?', [data.name, data.email, data.passwordHash, id], callback);
};

export const deleteAdmin = (id, callback) => {
  db.query('DELETE FROM Admin WHERE AdminID=?', [id], callback);
};
