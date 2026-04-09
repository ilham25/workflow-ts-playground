import { BasePropertiesComponent } from "~/features/playground/components/properties/base-properties-component"
import type { AppNodePropertiesComponentProps } from "~/features/playground/types/app-node"
import type { MergeNode } from "../types"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

const methods: { label: string; value: string }[] = [
  {
    label: "Append",
    value: "append",
  },
]

export const MergeNodeProperties = ({
  node,
  onOpenChange,
  open,
}: AppNodePropertiesComponentProps) => {
  const mergeNode = node as MergeNode
  return (
    <BasePropertiesComponent
      node={node}
      open={open}
      onOpenChange={onOpenChange}
      inputNames={Array.from(
        { length: mergeNode.data.parameters.inputCounts },
        (_, index) => `Input ${index + 1}`
      )}
      outputNames={[]}
    >
      <div>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="inputCounts">Input Counts</FieldLabel>
            <Input
              id="inputCounts"
              autoComplete="off"
              placeholder="2"
              value={mergeNode.data.parameters.inputCounts.toString()}
            />
            <FieldDescription>The number of inputs to merge.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="method">Method</FieldLabel>
            <Select id="method" items={methods} value={"append"}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Method</SelectLabel>
                  {methods.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FieldDescription>
              The method to use for merging the inputs.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </div>
    </BasePropertiesComponent>
  )
}
