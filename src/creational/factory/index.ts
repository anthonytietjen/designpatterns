import { ShapeFactory, enShapeType } from "./shapeFactory/ShapeFactory";

const myStar = ShapeFactory.CreateShape(enShapeType.Star)
myStar.draw(50)

const myCircle = ShapeFactory.CreateShape(enShapeType.Circle)
myCircle.draw(400)