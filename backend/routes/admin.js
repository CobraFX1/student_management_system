import express from 'express';
import {
  getAllAdmins,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin
} from '../models/adminModel.js';

const router = express.Router();

router.get('/', (req, res) => getAllAdmins((err, results) => err ? res.status(500).json(err) : res.json(results)));
router.get('/:id', (req, res) => getAdminById(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json(results)));
router.post('/', (req, res) => createAdmin(req.body, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Admin created', id: results.insertId })));
router.put('/:id', (req, res) => updateAdmin(req.params.id, req.body, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Admin updated' })));
router.delete('/:id', (req, res) => deleteAdmin(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'Admin deleted' })));

export default router;
