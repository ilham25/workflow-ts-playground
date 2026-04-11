import { Split } from "lucide-react"
import { IfNodePlayground } from "./playground"
import { IfNodeProperties } from "./properties"
import type { AppNodeComponent } from "~/features/playground/types/app-node"

export const node: AppNodeComponent = {
  playgroundComponent: IfNodePlayground,
  propertiesComponent: IfNodeProperties,
  icon: Split,
}
