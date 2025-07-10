import express from 'express';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: 'json' };
import playerRoutes from './routes.js';

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/player_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/players', playerRoutes);

app.listen(3000, () => {
  console.log('Player service running on port 3000');
});
