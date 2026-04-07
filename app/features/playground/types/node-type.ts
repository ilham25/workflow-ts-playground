import type { BaseNodeParameters, Nodes } from "../nodes/types"

export interface BaseNodeInput {
  fromNode: string
  fromOutputIndex: number
  toInputIndex: number
}

export interface BaseNodeOutput {
  toNode: string
  toOutputIndex: number
}

export interface BaseNodeTypeDescription {
  name: string
  displayName: string
  input: BaseNodeInput[]
  output: BaseNodeOutput[]
  parameters: BaseNodeParameters
}

export type NodeTypes = Nodes["type"]
