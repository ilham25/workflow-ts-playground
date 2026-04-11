import { Logs } from "lucide-react"
import { LogNodePlayground } from "./playground"
import { LogNodeProperties } from "./properties"
import type { AppNodeComponent } from "~/features/playground/types/app-node"

export const node: AppNodeComponent = {
  playgroundComponent: LogNodePlayground,
  propertiesComponent: LogNodeProperties,
  icon: Logs,
}
