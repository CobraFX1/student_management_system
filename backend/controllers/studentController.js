import * as Student from '../models/studentModel.js';

export const getStudents = (req, res) => {
  Student.getAllStudents((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const getStudent = (req, res) => {
  Student.getStudentById(req.params.id, (err, results) => {
    if (err) return res.status(500).send(err);
    if (!results.length) return res.status(404).send('Student not found');
    res.json(results[0]);
  });
};

export const addStudent = (req, res) => {
  Student.createStudent(req.body, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: results.insertId, ...req.body });
  });
};

export const editStudent = (req, res) => {
  Student.updateStudent(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.send('Student updated successfully');
  });
};

export const removeStudent = (req, res) => {
  Student.deleteStudent(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.send('Student deleted successfully');
  });
};
