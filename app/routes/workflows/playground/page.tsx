import { ReactFlow, Background, BackgroundVariant } from "@xyflow/react"
import { appNodeComponents, nodeTypes } from "~/features/playground/nodes"
import type { AppNode } from "~/features/playground/types/app-node"
import { Button } from "~/components/ui/button"
import { useWorkflowExecution } from "~/services/workflows/hooks/use-workflow-execution"
import { usePlaygroundData } from "~/features/playground/hooks/use-playground-data"
import { useParams } from "react-router"

export default function Page() {
  const { workflowId } = useParams<{ workflowId: string }>()
  const {
    edges,
    nodes,
    onNodesChange,
    setNodeResult,
    onEdgesChange,
    onConnect,
    resetNodeResult,
    selectNode,
    activeNode,
  } = usePlaygroundData(workflowId!)
  const { execute } = useWorkflowExecution(setNodeResult)

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
          selectNode(node.id)
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
              selectNode(null)
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
            resetNodeResult()
            execute({ workflowId: workflowId! })
          }}
        >
          Execute Workflow
        </Button>
      </div>
    </div>
  )
}
