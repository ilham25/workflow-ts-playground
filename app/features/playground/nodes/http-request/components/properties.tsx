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
import { BasePropertiesComponent } from "~/features/playground/components/properties/base-properties-component"
import type { AppNodePropertiesComponentProps } from "~/features/playground/types/app-node"
import type { HttpRequestNode } from "../types"

const methods: { label: string; value: string }[] = [
  {
    label: "GET",
    value: "GET",
  },
  {
    label: "POST",
    value: "POST",
  },
  {
    label: "PUT",
    value: "PUT",
  },
  {
    label: "PATCH",
    value: "PATCH",
  },
  {
    label: "DELETE",
    value: "DELETE",
  },
]

export const HttpRequestNodeProperties = ({
  node,
  onOpenChange,
  open,
}: AppNodePropertiesComponentProps) => {
  const httpRequestNode = node as HttpRequestNode

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
            <FieldLabel htmlFor="url">URL</FieldLabel>
            <Input
              id="url"
              autoComplete="off"
              placeholder="Evil Rabbit"
              value={httpRequestNode.data.parameters.url}
            />
            <FieldDescription>The URL to make the request to.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="method">Method</FieldLabel>
            <Select
              id="method"
              items={methods}
              value={httpRequestNode.data.parameters.method}
            >
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
              The HTTP method to use for the request.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </div>
    </BasePropertiesComponent>
  )
}
