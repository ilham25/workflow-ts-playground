import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field"
import { BasePropertiesComponent } from "~/features/playground/components/properties/base-properties-component"
import type { AppNodePropertiesComponentProps } from "~/features/playground/types/app-node"
import type { IfNode } from "../types"
import { Input } from "~/components/ui/input"

export const IfNodeProperties = ({
  node,
  onOpenChange,
  open,
}: AppNodePropertiesComponentProps) => {
  const ifNode = node as IfNode
  return (
    <BasePropertiesComponent
      node={node}
      open={open}
      onOpenChange={onOpenChange}
      inputNames={[]}
      outputNames={["True Branch", "False Branch"]}
    >
      <div>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="condition">Condition</FieldLabel>
            <Input
              id="condition"
              autoComplete="off"
              className="font-mono"
              value={ifNode.data.parameters.condition}
            />
            <FieldDescription>The condition to evaluate.</FieldDescription>
          </Field>
        </FieldGroup>
      </div>
    </BasePropertiesComponent>
  )
}
