import { DB } from "./DB/DB"
import { User } from "./DB/User"

const main = () => {
  const db = DB.getInstance()
  const user = new User(db)
}

main()