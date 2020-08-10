import { ObserverA } from "./ObserverA"
import { ObserverB } from "./ObserverB"
import { ComponentA } from "./ComponentA"
import { ComponentB } from "./ComponentB"

const main = () => {
  const observerA = new ObserverA(2, onAllComponentsRendered)
  observerA.startObserving()

  const observerB = new ObserverB()
  observerB.startObserving()

  const componentB = new ComponentA()
  componentB.render()

  const componentC = new ComponentB()
  componentC.render()
}

const onAllComponentsRendered = () => {
  console.log("All components rendered")
}

main()