import type { NodeComponent } from "../../types"
import { IfNodePlayground } from "./playground"
import { IfNodeProperties } from "./properties"

export const node: NodeComponent = {
  playgroundComponent: IfNodePlayground,
  propertiesComponent: IfNodeProperties,
}
