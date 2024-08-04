import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('This is an application in TypeScript for email management');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


export default app;