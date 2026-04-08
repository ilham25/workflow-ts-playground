import type { Edge, Node } from "@xyflow/react"
import type { BaseNodeData } from "~/features/playground/types/app-node"

export type MergeNodeData = BaseNodeData & {}

export type MergeNode = Node<MergeNodeData, "merge">

export type MergeEdge = Edge<MergeNodeData, "merge">
