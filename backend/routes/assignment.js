import express from 'express';
import {
  getAllAssignments,
  getAssignmentById,
  createAssignment,
  updateAssignment,
  deleteAssignment
} from '../models/assignmentModel.js';

const router = express.Router();

router.get('/', (req, res) => getAllAssignments((err, results) => err ? res.status(500).json(err) : res.json(results)));
router.get('/:id', (req, res) => getAssignmentById(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json(results)));
router.post('/', (req, res) => createAssignment(req.body, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Assignment created', id: results.insertId })));
router.put('/:id', (req, res) => updateAssignment(req.params.id, req.body, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Assignment updated' })));
router.delete('/:id', (req, res) => deleteAssignment(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Assignment deleted' })));

export default router;
