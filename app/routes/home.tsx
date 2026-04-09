import { useState } from "react"
import { ReactFlow, Background, BackgroundVariant } from "@xyflow/react"
import { appNodeComponents, nodeTypes } from "~/features/playground/nodes"
import type { AppNode } from "~/features/playground/types/app-node"
import { Button } from "~/components/ui/button"
import { useWorkflowExecution } from "~/services/workflows/hooks/use-workflow-execution"
import { usePlaygroundData } from "~/features/playground/hooks/use-playground-data"

const workflowId = "workflow-002"

export default function Home() {
  const { edges, setNodes, nodes, onNodesChange, onEdgesChange, onConnect } =
    usePlaygroundData(workflowId)
  const { execute } = useWorkflowExecution((data) => {
    setNodes((prev) =>
      prev.map((node): AppNode => {
        if (node.id !== data.node.description.name) return node

        switch (data.status) {
          case "idle":
            return {
              ...node,
              data: { ...node.data, result: { status: "idle" } },
            } as AppNode
          case "processing":
            return {
              ...node,
              data: { ...node.data, result: { status: "processing" } },
            } as AppNode
          case "success":
            return {
              ...node,
              data: {
                ...node.data,
                result: {
                  status: "success",
                  input: data.data.input,
                  output: data.data.output,
                },
              },
            } as AppNode
          case "error":
            return {
              ...node,
              data: {
                ...node.data,
                result: { status: "error", error: data.data.error },
              },
            } as AppNode
          default:
            return node
        }
      })
    )
  })

  const [activeNode, setActiveNode] = useState<AppNode | null>(null)

  const Properties = !activeNode
    ? null
    : appNodeComponents[activeNode.type].propertiesComponent

  return (
    <div className="relative h-screen w-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        onNodeClick={(_, node) => {
          setActiveNode(node)
        }}
        snapToGrid
      >
        <Background variant={BackgroundVariant.Dots} />
      </ReactFlow>

      {Properties && (
        <Properties
          node={activeNode!}
          open={Boolean(activeNode)}
          onOpenChange={(open) => {
            if (!open) {
              setActiveNode(null)
            }
          }}
          inputNames={[]}
          outputNames={[]}
        />
      )}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Button
          size={"lg"}
          onClick={() => {
            setNodes((nodes) =>
              nodes.map(
                (node) =>
                  ({
                    ...node,
                    data: {
                      ...node.data,
                      result: {
                        status: "idle",
                      },
                    },
                  }) as AppNode
              )
            )
            execute({ jobId: "job-001", workflowId })
          }}
        >
          Execute Workflow
        </Button>
      </div>
    </div>
  )
}
