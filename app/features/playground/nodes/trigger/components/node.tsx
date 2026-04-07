import { MousePointer2 } from "lucide-react"
import type { NodeComponent } from "../../types"
import { TriggerNodePlayground } from "./playground"
import { TriggerNodeProperties } from "./properties"

export const node: NodeComponent = {
  playgroundComponent: TriggerNodePlayground,
  propertiesComponent: TriggerNodeProperties,
  icon: MousePointer2,
}
