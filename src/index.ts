// src/index.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todo';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/todos', todoRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
