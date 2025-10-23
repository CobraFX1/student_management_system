import express from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} from '../models/studentModel.js';

const router = express.Router();

// GET all students
router.get('/', (req, res) => {
  getAllStudents((err, results) => err ? res.status(500).json(err) : res.json(results));
});

// GET student by ID
router.get('/:id', (req, res) => {
  getStudentById(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json(results));
});

// POST create student
router.post('/', (req, res) => {
  createStudent(req.body, (err, results) => err ? res.status(500).json(err) : res.json(results));
});

// PUT update student
router.put('/:id', (req, res) => {
  updateStudent(req.params.id, req.body, (err, results) => err ? res.status(500).json(err) : res.json(results));
});

// DELETE student
router.delete('/:id', (req, res) => {
  deleteStudent(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json(results));
});

export default router;
