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
import type { EngineNodeExecutionData } from "~/services/workflows/entities/engine-node.entity"

export type BaseNodeParameters = Record<
  string,
  string | number | boolean | null
>

export type BaseNodeData = {
  name: string
  displayName: string
  parameters: BaseNodeParameters
  result: AppNodeResult
}

export type AppNodeIdleResult = {
  status: "idle"
}

export type AppNodeProcessingResult = {
  status: "processing"
}

export type AppNodeSuccessResult = {
  status: "success"
  input: EngineNodeExecutionData[][]
  output: EngineNodeExecutionData[][]
}

export type AppNodeErrorResult = {
  status: "error"
  error: string
}

export type AppNodeResult =
  | AppNodeIdleResult
  | AppNodeProcessingResult
  | AppNodeSuccessResult
  | AppNodeErrorResult

export type AppNodeComponentProps = {
  node: NodeProps<AppNode>
}

export type AppNodePropertiesComponentProps = {
  node: AppNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

export type AppEdgeComponentProps = {
  edge: EdgeProps<AppEdge>
}

export type AppNodeComponent = {
  playgroundComponent: (props: AppNodeComponentProps) => React.JSX.Element
  propertiesComponent: (
    props: AppNodePropertiesComponentProps
  ) => React.JSX.Element
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
