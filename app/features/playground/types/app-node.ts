import type { LucideIcon } from "lucide-react"
import type {
  HttpRequestEdge,
  HttpRequestNode,
} from "../nodes/http-request/types"
import type { IfEdge, IfNode } from "../nodes/if/types"
import type { LogEdge, LogNode } from "../nodes/log/types"
import type { MergeEdge, MergeNode } from "../nodes/merge/types"
import type { TriggerEdge, TriggerNode } from "../nodes/trigger/types"
import type React from "react"
import type { EdgeProps, NodeProps } from "@xyflow/react"

export type BaseNodeParameters = Record<
  string,
  string | number | boolean | null
>

export type BaseNodeData = {
  name: string
  displayName: string
  parameters: BaseNodeParameters
  _state: BaseNodeState
}

export type BaseNodeState = {
  status: "idle" | "processing" | "success" | "error"
  error?: string
}

export type AppNodeComponentProps = {
  node: NodeProps<AppNode>
}

export type AppEdgeComponentProps = {
  edge: EdgeProps<AppEdge>
}

export type AppNodeComponent = {
  playgroundComponent: (props: AppNodeComponentProps) => React.JSX.Element
  propertiesComponent: (props: AppNodeComponentProps) => React.JSX.Element
  edgeComponent: (props: AppEdgeComponentProps) => React.JSX.Element
  icon: LucideIcon
}

export type AppNodeComponentType = Record<AppNodeTypes, AppNodeComponent>

export type AppNode =
  | TriggerNode
  | HttpRequestNode
  | IfNode
  | LogNode
  | MergeNode

export type AppEdge =
  | TriggerEdge
  | HttpRequestEdge
  | IfEdge
  | LogEdge
  | MergeEdge

export type AppNodeTypes = AppNode["type"]
export type AppEdgeTypes = AppEdge["type"]
