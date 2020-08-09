import { ComponentA as Observer } from "./Observer"
import { ComponentB } from "./ComponentB"
import { ComponentC } from "./ComponentC"

const windowLoadedListener = () => {
  const observer = new Observer(2, onAllComponentsRendered)

  const componentB = new ComponentB()
  componentB.render()

  const componentC = new ComponentC()
  componentC.render()
}

const onAllComponentsRendered = () => {
  console.log("All components rendered")
}


window.addEventListener('load', windowLoadedListener)