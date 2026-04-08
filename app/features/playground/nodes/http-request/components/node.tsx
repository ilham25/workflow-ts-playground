import { Globe } from "lucide-react"
import { HttpRequestNodePlayground } from "./playground"
import { HttpRequestNodeProperties } from "./properties"
import type { AppNodeComponent } from "~/features/playground/types/app-node"
import { HttpRequestEdgeComponent } from "./edge"

export const node: AppNodeComponent = {
  playgroundComponent: HttpRequestNodePlayground,
  propertiesComponent: HttpRequestNodeProperties,
  edgeComponent: HttpRequestEdgeComponent,
  icon: Globe,
}
