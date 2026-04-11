import type {
  AppNodeTypes,
  BaseNodeParameters,
} from "~/features/playground/types/app-node"

export interface Workflow {
  id: string
  name: string
  nodes: WorkflowNode[]
  connections: Record<string, WorkflowNodeConnection[]>
}

export interface WorkflowNode {
  id: string
  name: string
  type: AppNodeTypes
  parameters: BaseNodeParameters
  position: { x: number; y: number }
}

export interface WorkflowNodeConnection {
  node: string
  outputIndex: number
  inputIndex?: number
}
