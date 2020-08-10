import { IProvider } from './IProvider';

export class MemoryProvider implements IProvider {
  values:any = {}

  public read = (path: string) => {
    return this.values[path] || '';
  }

  public write = (data: string, path: string) => {
    this.values[path] = data
  }
}