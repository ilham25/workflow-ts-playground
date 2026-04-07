import { BaseNodeComponent } from "~/features/playground/components/node/base-node-component"
import type { NodeComponentProps } from "../../types"

export const TriggerNodePlayground = ({
  node,
  icon: Icon,
}: NodeComponentProps) => {
  return (
    <BaseNodeComponent
      node={node}
      isStartNode
      className="outline-2 outline-offset-2 outline-red-500"
    >
      <Icon />
    </BaseNodeComponent>
  )
}
