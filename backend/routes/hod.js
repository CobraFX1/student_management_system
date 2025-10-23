import express from 'express';
import {
  getAllHODs,
  getHODById,
  createHOD,
  updateHOD,
  deleteHOD
} from '../models/hodModel.js';

const router = express.Router();

router.get('/', (req, res) => getAllHODs((err, results) => err ? res.status(500).json(err) : res.json(results)));
router.get('/:id', (req, res) => getHODById(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json(results)));
router.post('/', (req, res) => createHOD(req.body, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'HOD created', id: results.insertId })));
router.put('/:id', (req, res) => updateHOD(req.params.id, req.body, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'HOD updated' })));
router.delete('/:id', (req, res) => deleteHOD(req.params.id, (err, results) => err ? res.status(500).json(err) : res.json({ message: 'HOD deleted' })));

export default router;
