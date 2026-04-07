import type React from "react"
import type { NodeTypes } from "../../types/node-type"
import type { NodeProps } from "@xyflow/react"

export type BaseNodeParameters = Record<
  string,
  string | number | boolean | null
>

export type NodeComponent = {
  playgroundComponent: (props: NodeProps) => React.JSX.Element
  propertiesComponent: (props: NodeProps) => React.JSX.Element
}

export type NodeComponents = Record<NodeTypes, NodeComponent>
