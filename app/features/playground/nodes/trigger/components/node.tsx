import { MousePointer2 } from "lucide-react"
import { TriggerNodePlayground } from "./playground"
import { TriggerNodeProperties } from "./properties"
import type { AppNodeComponent } from "~/features/playground/types/app-node"

export const node: AppNodeComponent = {
  playgroundComponent: TriggerNodePlayground,
  propertiesComponent: TriggerNodeProperties,
  icon: MousePointer2,
}
