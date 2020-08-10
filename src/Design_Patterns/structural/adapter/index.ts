import { Dog } from "./Dog"
import { Fish } from "./Fish"
import { FishToDogAdapter } from "./FishToDogAdapter"
import { IDog } from "./IDog"

const main = () => {
  const dogs: IDog[] = [
    new Dog(),
    new FishToDogAdapter(new Fish())
  ]

  for (const dog of dogs) {
    dog.walk()
  }
}

main()