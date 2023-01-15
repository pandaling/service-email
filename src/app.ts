require('dotenv').config({ path: __dirname + '/config/.env' });

import express, { Application, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import { RoutesV1 } from './routes';

const app: Application = express();

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For testing purpose
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>OK</h1>');
});

const routesv1 = new RoutesV1(app);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log('error caught in app.ts ', err);
  if (err instanceof Error) {
    return res.status(500).send(err.message);
  }

  return res.status(500).send(err);
});

export default app;
