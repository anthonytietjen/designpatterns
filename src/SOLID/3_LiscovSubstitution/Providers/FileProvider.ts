import fs from 'fs'
import { IProvider } from './IProvider';

export class FileProvider implements IProvider {
  values:any = {}

  public read = (path: string) => {
    return fs.readFileSync(path, {encoding: 'utf-8'}).toString();
  }

  public write = (data: string, path: string) => {
    fs.writeFileSync(path, data, {encoding: 'utf-8'})
  }
}