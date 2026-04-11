import { Merge } from "lucide-react"
import { MergeNodePlayground } from "./playground"
import { MergeNodeProperties } from "./properties"
import type { AppNodeComponent } from "~/features/playground/types/app-node"

export const node: AppNodeComponent = {
  playgroundComponent: MergeNodePlayground,
  propertiesComponent: MergeNodeProperties,
  icon: Merge,
}
