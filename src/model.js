import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  number: Number
}, { timestamps: true });

export default mongoose.model('Player', playerSchema);
