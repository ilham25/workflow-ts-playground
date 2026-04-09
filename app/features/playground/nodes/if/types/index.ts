import type { Edge, Node } from "@xyflow/react"
import type { BaseNodeData } from "~/features/playground/types/app-node"
import type { EngineIfNodeParameters } from "~/services/workflows/entities/engine-node.entity"

export type IfNodeData = BaseNodeData & {
  parameters: EngineIfNodeParameters
}

export type IfNode = Node<IfNodeData, "if">

export type IfEdge = Edge<IfNodeData, "if">
