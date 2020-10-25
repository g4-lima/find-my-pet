import 'reflect-metadata';

import express from 'express';
import path from 'path';
import cors from 'cors';

import routes from './routes';
import createConnection from './database';

createConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

export default app;
