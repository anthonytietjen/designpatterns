import { User } from "./User"

const main = () => {
  const db = DB.getInstance()
  const user = new User(db)
}

main()