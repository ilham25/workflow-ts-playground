import type { Edge, Node } from "@xyflow/react"
import type { BaseNodeData } from "~/features/playground/types/app-node"

export type HttpRequestNodeData = BaseNodeData & {}

export type HttpRequestNode = Node<HttpRequestNodeData, "httpRequest">

export type HttpRequestEdge = Edge<HttpRequestNodeData, "httpRequest">
