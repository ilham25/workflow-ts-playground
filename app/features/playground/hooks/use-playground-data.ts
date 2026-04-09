import { useCallback, useEffect, useState } from "react"
import { toPlaygroundData } from "~/services/workflows/entities/adapters/workflow-node.adapter"
import { useGetWorkflowById } from "~/services/workflows/hooks/use-get-workflow-by-id"
import type { AppNode } from "../types/app-node"
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Edge,
  type OnConnect,
  type OnEdgesChange,
  type OnNodesChange,
} from "@xyflow/react"

export const usePlaygroundData = (workflowId: string) => {
  const { data } = useGetWorkflowById(workflowId)

  const { edges: initialEdges, nodes: initialNodes } = toPlaygroundData(
    data?.data
  )

  const [nodes, setNodes] = useState<AppNode[]>(initialNodes)
  const [edges, setEdges] = useState<Edge[]>(initialEdges)

  const onNodesChange: OnNodesChange<AppNode> = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  )
  const onEdgesChange: OnEdgesChange<Edge> = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  )
  const onConnect: OnConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  )

  useEffect(() => {
    setNodes(initialNodes)
    setEdges(initialEdges)
  }, [data])

  return { edges, nodes, onConnect, onEdgesChange, onNodesChange, setNodes }
}
