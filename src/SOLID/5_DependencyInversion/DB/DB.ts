export class DB {
  static instance: DB;

  public static getInstance = () => {
    if (!DB.instance) {
      DB.instance = new DB()
    }
    return DB.instance
  }

  public connect = () => {

  }
}