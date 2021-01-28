import { IDB } from "./IDB";

export class User {
  constructor(private db: IDB) {
    db.connect()
  }
}