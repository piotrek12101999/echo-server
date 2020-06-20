import { Request, Response } from 'express';
import { Db } from 'mongodb';
import findDocuments from '../db/findDocuments';

export default (db: Db) => async ({ query }: Request, response: Response) => {
  const { name } = query;

  if (!name) {
    response.status(400).send('Missing param');
  }

  try {
    const documents = await findDocuments(db, 'logs', name);

    response.status(200).send(documents);
  } catch (error) {
    response.status(500).send('Internal server error');
  }
};
