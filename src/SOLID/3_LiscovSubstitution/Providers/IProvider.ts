export interface IProvider {
  write: (value: string, path: string) => void
  read: (path: string) => string
}