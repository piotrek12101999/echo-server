import { Request, Response } from 'express';
import { Db } from 'mongodb';
import insertDocument from '../db/insertDocument';
import { ILog } from '../models/log.model';

export default (db: Db) => async ({ body }: Request, response: Response) => {
  const { name, message }: ILog = body;

  if (!name || !message) {
    response.status(400).send('Missing param');
  }

  if (name.length > 30 || message.length > 100) {
    response.status(400).send('Invalid param');
  }

  try {
    const { ops } = await insertDocument(db, 'logs', { name, message });
    const [addedDoc] = ops;

    response.status(200).send(addedDoc);
  } catch (error) {
    response.status(500).send('Internal server error');
  }
};
