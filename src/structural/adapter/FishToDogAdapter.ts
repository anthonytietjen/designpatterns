import { Fish } from "./Fish";
import { IDog } from "./IDog";

export class FishToDogAdapter implements IDog {
  constructor(private fish: Fish) {
  }

  public walk = () => {
    this.fish.swim()
  }
}
