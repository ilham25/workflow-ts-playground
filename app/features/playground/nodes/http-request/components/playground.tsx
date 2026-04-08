import { BaseNodeComponent } from "~/features/playground/components/node/base-node-component"
import type { AppNodeComponentProps } from "~/features/playground/types/app-node"
import { appNodeComponents } from "../.."

export const HttpRequestNodePlayground = ({ node }: AppNodeComponentProps) => {
  const Icon = appNodeComponents[node.type].icon

  return (
    <BaseNodeComponent node={node}>
      <Icon />
    </BaseNodeComponent>
  )
}
