import express from 'express';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import logs from './routes/logs';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const main = async () => {
  const client = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  app.get('/logs', logs);

  app.listen(PORT, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${PORT}`);
  });
};

main();
