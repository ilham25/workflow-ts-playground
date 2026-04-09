import { BaseNodeComponent } from "~/features/playground/components/node/base-node-component"
import type { AppNodeComponentProps } from "~/features/playground/types/app-node"
import { appNodeComponents } from "../.."
import { Handle, Position } from "@xyflow/react"

export const IfNodePlayground = ({ node }: AppNodeComponentProps) => {
  const Icon = appNodeComponents[node.type].icon

  return (
    <BaseNodeComponent node={node}>
      <Icon />
      <Handle type="target" id="input-0" position={Position.Left} />
      <Handle
        type="source"
        position={Position.Right}
        id="output-0"
        style={{
          top: 20,
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="output-1"
        style={{
          top: 60,
        }}
      />
    </BaseNodeComponent>
  )
}
