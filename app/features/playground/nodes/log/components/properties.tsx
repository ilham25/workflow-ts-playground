import { BasePropertiesComponent } from "~/features/playground/components/properties/base-properties-component"
import type { AppNodePropertiesComponentProps } from "~/features/playground/types/app-node"

export const LogNodeProperties = ({
  node,
  onOpenChange,
  open,
}: AppNodePropertiesComponentProps) => {
  return (
    <BasePropertiesComponent
      node={node}
      open={open}
      onOpenChange={onOpenChange}
    >
      <div>Log</div>
    </BasePropertiesComponent>
  )
}
