import express from 'express';
import {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment
} from '../models/departmentModel.js';

const router = express.Router();

router.get('/', (req, res) => getAllDepartments((err, results) => err ? res.status(500).json(err) : res.json(results)));
router.get('/:id', (req, res) => getDepartmentById(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json(results)));
router.post('/', (req, res) => createDepartment(req.body, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Department created', id: results.insertId })));
router.put('/:id', (req, res) => updateDepartment(req.params.id, req.body, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Department updated' })));
router.delete('/:id', (req, res) => deleteDepartment(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Department deleted' })));

export default router;
