import type { NodeComponent } from "../../types"
import { HttpRequestNodePlayground } from "./playground"
import { HttpRequestNodeProperties } from "./properties"

export const node: NodeComponent = {
  playgroundComponent: HttpRequestNodePlayground,
  propertiesComponent: HttpRequestNodeProperties,
}
