import { Star } from "./Star"
import { Circle } from "./Circle"

export enum enShapeType {
  Star,
  Circle
}

export class ShapeFactory {
  static CreateShape = (shapeType: enShapeType) => {
    switch (shapeType) {
      case enShapeType.Star:
        return <IShape>new Star()
      case enShapeType.Circle:
        return <IShape>new Circle()
      default:
        throw Error("Not implemented")
    }
  }
}