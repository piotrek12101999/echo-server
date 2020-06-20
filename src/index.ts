import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import connect from './db/connect';
import get_logs from './routes/get_logs';
import add_log from './routes/add_log';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const main = async () => {
  const db = await connect();

  app.get('/logs', get_logs(db));

  app.post('/logs', add_log(db));

  app.listen(PORT, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${PORT}`);
  });
};

main();
