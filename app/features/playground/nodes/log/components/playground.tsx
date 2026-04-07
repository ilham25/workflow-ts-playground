import { BaseNodeComponent } from "~/features/playground/components/node/base-node-component"
import type { NodeComponentProps } from "../../types"

export const LogNodePlayground = ({ node, icon: Icon }: NodeComponentProps) => {
  return (
    <BaseNodeComponent node={node}>
      <Icon />
    </BaseNodeComponent>
  )
}
