import type React from "react"
import type { NodeProps } from "@xyflow/react"
import type { TriggerNode } from "../trigger/types"
import type { HttpRequestNode } from "../http-request/types"
import type { IfNode } from "../if/types"
import type { LogNode } from "../log/types"
import type { MergeNode } from "../merge/types"
import type { NodeTypes } from "../../types/node-type"
import type { LucideIcon } from "lucide-react"

export type BaseNodeParameters = Record<
  string,
  string | number | boolean | null
>

export type Nodes = TriggerNode | HttpRequestNode | IfNode | LogNode | MergeNode

export type NodeComponentProps = {
  node: NodeProps<Nodes>
  icon: LucideIcon
}

export type NodeComponent = {
  playgroundComponent: (props: NodeComponentProps) => React.JSX.Element
  propertiesComponent: (props: NodeComponentProps) => React.JSX.Element
  icon: LucideIcon
}

export type NodeComponents = Record<NodeTypes, NodeComponent>
