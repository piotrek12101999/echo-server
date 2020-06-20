import { Db, InsertOneWriteOpResult } from 'mongodb';
import { IDBLog, ILog } from '../models/log.model';

export default async (db: Db, collectionName: string, data: ILog): Promise<InsertOneWriteOpResult<IDBLog>> => {
  const collection = db.collection(collectionName);

  try {
    const doc: InsertOneWriteOpResult<IDBLog> = await collection.insertOne(data);

    return doc;
  } catch (error) {
    throw new Error(error);
  }
};
