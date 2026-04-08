import type { Edge, Node } from "@xyflow/react"
import type { BaseNodeData } from "~/features/playground/types/app-node"

export type IfNodeData = BaseNodeData & {}

export type IfNode = Node<IfNodeData, "if">

export type IfEdge = Edge<IfNodeData, "if">
