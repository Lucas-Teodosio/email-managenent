import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('User route: GET request');
});

router.post('/', (req: Request, res: Response) => {
  res.send('User route: POST request');
});

export default router;