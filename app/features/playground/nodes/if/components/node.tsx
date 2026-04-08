import { Split } from "lucide-react"
import { IfNodePlayground } from "./playground"
import { IfNodeProperties } from "./properties"
import type { AppNodeComponent } from "~/features/playground/types/app-node"
import { IfEdgeComponent } from "./edge"

export const node: AppNodeComponent = {
  playgroundComponent: IfNodePlayground,
  propertiesComponent: IfNodeProperties,
  edgeComponent: IfEdgeComponent,
  icon: Split,
}
