import { MongoClient } from 'mongodb';

export default async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true });
    const db = client.db(process.env.MONGO_DB_NAME);

    return db;
  } catch (error) {
    throw new Error(error);
  }
};
