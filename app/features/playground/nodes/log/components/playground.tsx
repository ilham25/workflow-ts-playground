import { BaseNodeComponent } from "~/features/playground/components/node/base-node-component"
import type { AppNodeComponentProps } from "~/features/playground/types/app-node"
import { appNodeComponents } from "../.."
import { Handle, Position } from "@xyflow/react"

export const LogNodePlayground = ({ node }: AppNodeComponentProps) => {
  const Icon = appNodeComponents[node.type].icon

  return (
    <BaseNodeComponent node={node}>
      <Icon className="text-amber-500" />
      <Handle type="target" id="input-0" position={Position.Left} />
      <Handle type="source" id="output-0" position={Position.Right} />
    </BaseNodeComponent>
  )
}
