import express from 'express';
import {
  getAllFaculties,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty
} from '../models/facultyModel.js';

const router = express.Router();

router.get('/', (req, res) => getAllFaculties((err, results) => err ? res.status(500).json(err) : res.json(results)));
router.get('/:id', (req, res) => getFacultyById(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json(results)));
router.post('/', (req, res) => createFaculty(req.body, (err, results) => err ? res.status(500).json(err) : res.json(results)));
router.put('/:id', (req, res) => updateFaculty(req.params.id, req.body, (err, results) => err ? res.status(500).json(err) : res.json(results)));
router.delete('/:id', (req, res) => deleteFaculty(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json(results)));

export default router;
