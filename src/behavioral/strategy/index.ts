import config from './config.json'
import { enAlgorithmTypes, MyStrategy } from './MyStrategy'

const main = () => {
  const algorythmType = getAlgorithmTypeFromString(config.algorithmType)
  const myStrategy = new MyStrategy(algorythmType)
  const input = "hello world"
  const output = myStrategy.processInput(input)
  console.log(output)
}

const getAlgorithmTypeFromString = (value: string) => {
  switch (value) {
    case "a": return enAlgorithmTypes.A
    case "b": return enAlgorithmTypes.B
    default: throw Error("Not implemented")
  }
}

main()