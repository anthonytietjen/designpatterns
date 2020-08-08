export class Circle implements IShape {
  draw = (size: number) => {
    console.log(`Draw circle with size: ${size}`)
  }
}