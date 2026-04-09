import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { BasePropertiesComponent } from "~/features/playground/components/properties/base-properties-component"
import type { AppNodePropertiesComponentProps } from "~/features/playground/types/app-node"
import type { LogNode } from "../types"

export const LogNodeProperties = ({
  node,
  onOpenChange,
  open,
}: AppNodePropertiesComponentProps) => {
  const logNode = node as LogNode

  return (
    <BasePropertiesComponent
      node={node}
      open={open}
      onOpenChange={onOpenChange}
      inputNames={[]}
      outputNames={[]}
    >
      <div>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Input
              id="message"
              autoComplete="off"
              className="font-mono"
              value={logNode.data.parameters.message}
            />
            <FieldDescription>The message to log.</FieldDescription>
          </Field>
        </FieldGroup>
      </div>
    </BasePropertiesComponent>
  )
}
