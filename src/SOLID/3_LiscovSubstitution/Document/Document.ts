import { IProvider } from "../Providers/IProvider";

export class Document {
  constructor(private provider: IProvider, private path: string) {
  }

  public read = () => {
    return this.provider.read(this.path)
  }

  public write = (data: string) => {
    this.provider.write(data, this.path)
  }
}