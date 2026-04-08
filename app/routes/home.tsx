import { useCallback, useState } from "react"
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type OnNodesChange,
  type Node,
  type OnEdgesChange,
  type OnConnect,
  Background,
  BackgroundVariant,
  type Edge,
} from "@xyflow/react"
import { edgeTypes, nodeTypes } from "~/features/playground/nodes"
import type { AppEdge, AppNode } from "~/features/playground/types/app-node"

const initialNodes: AppNode[] = [
  {
    id: "n1",
    type: "trigger",
    position: { x: 0, y: 0 },
    data: {
      name: "node-1",
      displayName: "TriggerNode",
      parameters: {},
      _state: {
        status: "success",
      },
    },
  },
  {
    id: "n2",
    type: "httpRequest",
    position: { x: 120, y: 0 },
    data: {
      name: "node-2",
      displayName: "Fetch User",
      parameters: {
        url: "https://jsonplaceholder.typicode.com/users/{{ $json.query.userId }}",
        method: "GET",
      },
      _state: {
        status: "processing",
      },
    },
  },
  {
    id: "n3",
    type: "if",
    position: { x: 240, y: 0 },
    data: {
      name: "node-3",
      displayName: "Check Active",
      parameters: {
        condition: "{{ $json.id > 3 }}",
      },
      _state: {
        status: "idle",
      },
    },
  },
  {
    id: "n4",
    type: "log",
    position: { x: 400, y: -120 },
    data: {
      name: "node-4",
      displayName: "Log Active",
      parameters: {
        message: "{{ $json.name }} is active",
      },
      _state: {
        status: "idle",
      },
    },
  },
  {
    id: "n5",
    type: "log",
    position: { x: 400, y: 120 },
    data: {
      name: "node-5",
      displayName: "Log Inctive",
      parameters: {
        message: "{{ $json.name }} is inactive",
      },
      _state: {
        status: "idle",
      },
    },
  },
  {
    id: "n6",
    type: "merge",
    position: { x: 600, y: 0 },
    data: {
      name: "node-6",
      displayName: "Merge Results",
      parameters: {
        inputCounts: 2,
      },
      _state: {
        status: "idle",
      },
    },
  },
]
const initialEdges: Edge[] = [{ id: "n1-n2", source: "n1", target: "n2" }]

export default function Home() {
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

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  )
}
