import { AlgorithmA } from "./AlgorithmA"
import { AlgorithmB } from "./AlgorithmB"

export enum enAlgorithmTypes {
  A, B
}

export class MyStrategy {
  constructor(private algorythmType: enAlgorithmTypes) {
  }

  public processInput = (input: string) => {
    switch (this.algorythmType) {
      case enAlgorithmTypes.A:
        return AlgorithmA.process(input)
      case enAlgorithmTypes.B:
        return AlgorithmB.process(input)
      default:
        throw Error("Not implemented")
    }
  }