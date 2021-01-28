import { IDB } from "./IDB";

export class DB implements IDB {
  connect(): () => void {
    throw new Error("Method not implemented.");
  }
  
  static instance: DB;

  public static getInstance = () => {
    if (!DB.instance) {
      DB.instance = new DB()
    }
    return DB.instance
  }

}