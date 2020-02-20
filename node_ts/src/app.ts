import express, { ErrorRequestHandler } from 'express';
import { json } from 'body-parser';
import todoRoutes from './routes/todos';

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

const myErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({ message: err.message });
}

app.use(myErrorHandler);

app.listen(2000);