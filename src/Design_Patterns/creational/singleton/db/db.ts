export class DB {
  static instance: DB;

  static getInstance = () => {
    if (!DB.instance) {
      DB.instance = new DB()
    }
    return DB.instance
  }

  create = () => {
  }

  read = () => {
  }

  update = () => {
  }

  delete = () => {
  }
}