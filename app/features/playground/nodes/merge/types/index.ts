import type { Edge, Node } from "@xyflow/react"
import type { BaseNodeData } from "~/features/playground/types/app-node"
import type { EngineMergeNodeParameters } from "~/services/workflows/entities/engine-node.entity"

export type MergeNodeData = BaseNodeData & {
  parameters: EngineMergeNodeParameters
}

export type MergeNode = Node<MergeNodeData, "merge">

export type MergeEdge = Edge<MergeNodeData, "merge">
