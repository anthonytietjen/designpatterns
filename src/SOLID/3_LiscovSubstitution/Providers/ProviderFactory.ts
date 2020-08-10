import { FileProvider } from "./FileProvider"
import { MemoryProvider } from "./MemoryProvider"

export enum enProviderType {
  FILE,
  MEMORY
}

export class ProviderFactory {
  public static BuildProvider = (providerType: enProviderType) => {
    switch (providerType) {
      case enProviderType.FILE:
        return new FileProvider()
      case enProviderType.MEMORY:
        return new MemoryProvider()
      default:
        throw Error("Not implemented")
    }
  }
}