import { Logs } from "lucide-react"
import { LogNodePlayground } from "./playground"
import { LogNodeProperties } from "./properties"
import type { AppNodeComponent } from "~/features/playground/types/app-node"
import { LogEdgeComponent } from "./edge"

export const node: AppNodeComponent = {
  playgroundComponent: LogNodePlayground,
  propertiesComponent: LogNodeProperties,
  edgeComponent: LogEdgeComponent,
  icon: Logs,
}
