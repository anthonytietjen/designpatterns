const main = () => {
  const db = DB.getInstance()
  db.create()
  db.read()
  db.update()
  db.delete()
}

main()