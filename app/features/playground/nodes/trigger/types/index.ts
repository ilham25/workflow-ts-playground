import type { Edge, Node } from "@xyflow/react"
import type { BaseNodeData } from "~/features/playground/types/app-node"

export type TriggerNodeData = BaseNodeData & {}

export type TriggerNode = Node<TriggerNodeData, "trigger">

export type TriggerEdge = Edge<TriggerNodeData, "trigger">
