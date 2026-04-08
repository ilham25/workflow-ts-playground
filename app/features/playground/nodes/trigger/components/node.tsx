import { MousePointer2 } from "lucide-react"
import { TriggerNodePlayground } from "./playground"
import { TriggerNodeProperties } from "./properties"
import type { AppNodeComponent } from "~/features/playground/types/app-node"
import { TriggerEdgeComponent } from "./edge"

export const node: AppNodeComponent = {
  playgroundComponent: TriggerNodePlayground,
  propertiesComponent: TriggerNodeProperties,
  edgeComponent: TriggerEdgeComponent,
  icon: MousePointer2,
}
