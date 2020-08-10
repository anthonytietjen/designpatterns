import { ProviderFactory, enProviderType } from "./Providers/ProviderFactory"
import { Document } from "./Document/Document"

const main = () => {
  const providerType = enProviderType.FILE
  const pathToFile = "./myFile.txt"

  const provider = ProviderFactory.BuildProvider(providerType)
  const doc = new Document(provider, pathToFile)

  doc.write("hello world")
  const value = doc.read()

  console.log(value)
}

main()