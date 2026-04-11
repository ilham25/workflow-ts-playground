import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Connection,
  type Edge,
  type EdgeChange,
  type NodeChange,
} from "@xyflow/react"
import type { AppNode } from "../types/app-node"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import type { EngineNodeUpdateEvent } from "~/services/workflows/events/engine-node-update.event"

interface PlaygroundStore {
  nodes: AppNode[]
  edges: Edge[]
  selectedNodeId: string | null

  hydrate: (nodes: AppNode[], edges: Edge[]) => void

  onNodesChange: (changes: NodeChange<AppNode>[]) => void
  onEdgesChange: (changes: EdgeChange<Edge>[]) => void
  onConnect: (params: Connection) => void
  selectNode: (id: string | null) => void
  setNodeResult: (eventData: EngineNodeUpdateEvent["data"]) => void
  resetNodeResult: () => void
}

export const usePlaygroundStore = create<PlaygroundStore>()(
  immer((set) => ({
    edges: [],
    nodes: [],
    selectedNodeId: null,
    hydrate(nodes, edges) {
      set({ nodes, edges })
    },
    onEdgesChange(changes) {
      set((s) => {
        s.edges = applyEdgeChanges(changes, s.edges)
      })
    },
    onNodesChange(changes) {
      set((s) => {
        s.nodes = applyNodeChanges(changes, s.nodes)
      })
    },
    selectNode(id) {
      set({ selectedNodeId: id })
    },
    onConnect(params) {
      set((s) => {
        s.edges = addEdge(params, s.edges)
      })
    },
    setNodeResult(eventData) {
      set((s) => {
        const nodeIndex = s.nodes.findIndex(
          (n) => n.id === eventData.node.description.name
        )
        const updatedNodes = s.nodes
        switch (eventData.status) {
          case "idle":
            updatedNodes[nodeIndex].data.result = { status: "idle" }
            break

          case "processing":
            updatedNodes[nodeIndex].data.result = { status: "processing" }
            break

          case "success":
            updatedNodes[nodeIndex].data.result = {
              status: "success",
              input: eventData.data.input,
              output: eventData.data.output,
            }
            break

          case "error":
            updatedNodes[nodeIndex].data.result = {
              status: "error",
              error: eventData.data.error,
            }
          default:
        }
      })
    },
    resetNodeResult() {
      set((s) => {
        s.nodes = s.nodes.map((n) => {
          n.data.result = { status: "idle" }
          return n
        })
      })
    },
  }))
)
