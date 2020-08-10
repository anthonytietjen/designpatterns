import { ShapeFactory, enShapeType } from "./shapeFactory/ShapeFactory";

const main = () => {
  const shapes: IShape[] = [
    ShapeFactory.CreateShape(enShapeType.Star),
    ShapeFactory.CreateShape(enShapeType.Circle)
  ]

  for(const shape of shapes){
    shape.draw(400)
  }
}

main()