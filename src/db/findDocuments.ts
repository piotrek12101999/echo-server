import { Db } from 'mongodb';
import { IDBLog } from '../models/log.model';

export default async (db: Db, collectionName: string, name: any): Promise<IDBLog[]> => {
  const collection = db.collection(collectionName);

  try {
    const docs: IDBLog[] = await collection.find({ name }).toArray();

    return docs;
  } catch (error) {
    throw new Error(error);
  }
};
