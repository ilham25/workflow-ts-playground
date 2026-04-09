import type { Edge } from "@xyflow/react"
import type { AppNode } from "../types/app-node"

export interface PlaygroundData {
  nodes: AppNode[]
  edges: Edge[]
}
