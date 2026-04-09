import type { PlaygroundData } from "~/features/playground/models/playground-data"
import type { Workflow } from "../workflow-node.entity"
import type { EngineNodeType } from "../engine-node.entity"
import { getNodeInput, getNodeOutput } from "../../utils/node-helpers"
import type { AppNode } from "~/features/playground/types/app-node"
import type { Edge } from "@xyflow/react"

export const toPlaygroundData = (workflow?: Workflow): PlaygroundData => {
  if (!workflow)
    return {
      nodes: [],
      edges: [],
    }

  const engineNodes = workflow.nodes.map((node) => {
    const input = getNodeInput(workflow, node)
    const output = getNodeOutput(workflow, node)

    return {
      description: {
        displayName: node.name,
        parameters: node.parameters,
        name: node.id,
        input,
        output,
        type: node.type,
      },
    }
  }) as EngineNodeType[]

  const nodes: AppNode[] = engineNodes.map((node, index) => {
    return {
      id: node.description.name,
      type: node.description.type,
      position: {
        x: index * 120,
        y: 0,
      },
      data: {
        name: node.description.name,
        displayName: node.description.displayName,
        parameters: node.description.parameters,
        result: {
          status: "idle",
        },
      },
    } as AppNode
  })

  const edges: Edge[] = engineNodes
    .map((node) => {
      const { input } = node.description

      const inputEdges: Edge[] = input.map((inputNode) => {
        return {
          id: `${inputNode.fromNode}-${node.description.name}`,
          source: inputNode.fromNode,
          target: node.description.name,
          targetHandle: `input-${inputNode.toInputIndex}`,
          sourceHandle: `output-${inputNode.fromOutputIndex}`,
        }
      })

      return inputEdges
    })
    .flat(1)

  return { nodes, edges }
}
