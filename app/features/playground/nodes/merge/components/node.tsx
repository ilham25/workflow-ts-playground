import { Merge } from "lucide-react"
import { MergeNodePlayground } from "./playground"
import { MergeNodeProperties } from "./properties"
import type { AppNodeComponent } from "~/features/playground/types/app-node"
import { MergeEdgeComponent } from "./edge"

export const node: AppNodeComponent = {
  playgroundComponent: MergeNodePlayground,
  propertiesComponent: MergeNodeProperties,
  edgeComponent: MergeEdgeComponent,
  icon: Merge,
}
