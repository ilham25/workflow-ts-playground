import type { Edge, Node } from "@xyflow/react"
import type { BaseNodeData } from "~/features/playground/types/app-node"

export type LogNodeData = BaseNodeData & {}

export type LogNode = Node<LogNodeData, "log">

export type LogEdge = Edge<LogNodeData, "log">
