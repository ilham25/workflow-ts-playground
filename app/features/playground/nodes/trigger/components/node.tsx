import type { NodeComponent } from "../../types"
import { TriggerNodePlayground } from "./playground"
import { TriggerNodeProperties } from "./properties"

export const node: NodeComponent = {
  playgroundComponent: TriggerNodePlayground,
  propertiesComponent: TriggerNodeProperties,
}
