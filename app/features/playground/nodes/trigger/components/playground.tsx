import { BaseNodeComponent } from "~/features/playground/components/node/base-node-component"
import type { AppNodeComponentProps } from "~/features/playground/types/app-node"
import { appNodeComponents } from "../.."

export const TriggerNodePlayground = ({ node }: AppNodeComponentProps) => {
  const Icon = appNodeComponents[node.type].icon

  return (
    <BaseNodeComponent node={node} isStartNode className="">
      <Icon />
    </BaseNodeComponent>
  )
}
