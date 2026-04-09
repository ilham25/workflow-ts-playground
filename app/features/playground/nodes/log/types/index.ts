import type { Edge, Node } from "@xyflow/react"
import type { BaseNodeData } from "~/features/playground/types/app-node"
import type { EngineLogNodeParameters } from "~/services/workflows/entities/engine-node.entity"

export type LogNodeData = BaseNodeData & {
  parameters: EngineLogNodeParameters
}

export type LogNode = Node<LogNodeData, "log">

export type LogEdge = Edge<LogNodeData, "log">
