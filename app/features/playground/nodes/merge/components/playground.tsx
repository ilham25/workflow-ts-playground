import { BaseNodeComponent } from "~/features/playground/components/node/base-node-component"
import type { AppNodeComponentProps } from "~/features/playground/types/app-node"
import { appNodeComponents } from "../.."
import { Handle, Position } from "@xyflow/react"

export const MergeNodePlayground = ({ node }: AppNodeComponentProps) => {
  const Icon = appNodeComponents[node.type].icon

  return (
    <BaseNodeComponent node={node}>
      <Icon className="text-cyan-500" />
      <Handle
        type="target"
        position={Position.Left}
        id="input-0"
        style={{
          top: 20,
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="input-1"
        style={{
          top: 60,
        }}
      />
      <Handle type="source" id="output-0" position={Position.Right} />
    </BaseNodeComponent>
  )
}
