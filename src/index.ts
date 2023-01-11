import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import auth from './middlewares/auth';
import routes from './routes';
import { init } from './wa';

const app = express();
app.use(cors());
app.use(express.json());
app.use(auth);
app.use('/', routes);
app.all('*', (req, res) => res.status(404).json({ error: 'URL not found' }));

const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT || 3000);
const listener = () => console.log(`Server is listening on http://${host}:${port}`);

(async () => {
  await init();
  app.listen(port, host, listener);
})();
