export interface ILog {
  name: string;
  message: string;
}

export interface IDBLog extends ILog {
  _id: string;
}
