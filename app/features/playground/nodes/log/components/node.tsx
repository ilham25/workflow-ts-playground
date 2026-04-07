import type { NodeComponent } from "../../types"
import { LogNodePlayground } from "./playground"
import { LogNodeProperties } from "./properties"

export const node: NodeComponent = {
  playgroundComponent: LogNodePlayground,
  propertiesComponent: LogNodeProperties,
}
