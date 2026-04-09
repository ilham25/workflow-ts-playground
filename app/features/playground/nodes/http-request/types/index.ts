import type { Edge, Node } from "@xyflow/react"
import type { BaseNodeData } from "~/features/playground/types/app-node"
import type { EngineHttpRequestNodeParameters } from "~/services/workflows/entities/engine-node.entity"

export type HttpRequestNodeData = BaseNodeData & {
  parameters: EngineHttpRequestNodeParameters
}

export type HttpRequestNode = Node<HttpRequestNodeData, "httpRequest">

export type HttpRequestEdge = Edge<HttpRequestNodeData, "httpRequest">
