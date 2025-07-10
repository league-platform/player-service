import express from 'express';
import Player from './model.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    console.log(`EVENT: player.created -> ${player.name}`);
    res.status(201).json(player);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const players = await Player.find();
  res.json(players);
});

export default router;
