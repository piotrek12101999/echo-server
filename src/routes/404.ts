import { Request, Response } from "express";
import * as path from "path";

export default (request: Request, response: Response) => {
  response.status(404).send("404 error");
};
