import { Merge } from "lucide-react"
import type { NodeComponent } from "../../types"
import { MergeNodePlayground } from "./playground"
import { MergeNodeProperties } from "./properties"

export const node: NodeComponent = {
  playgroundComponent: MergeNodePlayground,
  propertiesComponent: MergeNodeProperties,
  icon: Merge,
}
