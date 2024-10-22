import express from 'express';
import bodyParser from 'body-parser';
import supportRoutes from '../../routes/ticketRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.use('/support', supportRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

export default app;