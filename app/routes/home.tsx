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
} from "@xyflow/react"
import { nodeTypes } from "~/features/playground/nodes"

const initialNodes: Node[] = [
  {
    id: "n1",
    type: "trigger",
    position: { x: 0, y: 0 },
    data: { label: "Node 1" },
  },
  {
    id: "n2",
    type: "httpRequest",
    position: { x: 120, y: 0 },
    data: { label: "Node 2" },
  },
  {
    id: "n3",
    type: "if",
    position: { x: 240, y: 0 },
    data: { label: "Node 2" },
  },
  {
    id: "n4",
    type: "log",
    position: { x: 400, y: -120 },
    data: { label: "Node 2" },
  },
  {
    id: "n5",
    type: "log",
    position: { x: 400, y: 120 },
    data: { label: "Node 2" },
  },
  {
    id: "n6",
    type: "merge",
    position: { x: 600, y: 0 },
    data: { label: "Node 2" },
  },
]
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }]

export default function Home() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange: OnNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  )
  const onEdgesChange: OnEdgesChange = useCallback(
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
