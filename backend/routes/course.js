import express from 'express';
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} from '../models/courseModel.js';

const router = express.Router();

router.get('/', (req, res) => getAllCourses((err, results) => err ? res.status(500).json(err) : res.json(results)));
router.get('/:id', (req, res) => getCourseById(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json(results)));
router.post('/', (req, res) => createCourse(req.body, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Course created', id: results.insertId })));
router.put('/:id', (req, res) => updateCourse(req.params.id, req.body, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Course updated' })));
router.delete('/:id', (req, res) => deleteCourse(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Course deleted' })));

export default router;
