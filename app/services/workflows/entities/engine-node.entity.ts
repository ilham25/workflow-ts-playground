import type { BaseNodeParameters } from "~/features/playground/types/app-node"

export interface BaseNodeType {
  description: BaseNodeTypeDescription
}

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

// Engine Nodes
// -Trigger
export interface EngineTriggerNode extends BaseNodeType {
  description: EngineTriggerNodeDescription
}

export interface EngineTriggerNodeDescription extends BaseNodeTypeDescription {
  type: "trigger"
  parameters: BaseNodeParameters
}

// -Http Request
export interface EngineHttpRequestNode extends BaseNodeType {
  description: EngineHttpRequestNodeDescription
}

export interface EngineHttpRequestNodeDescription extends BaseNodeTypeDescription {
  type: "httpRequest"
  parameters: EngineHttpRequestNodeParameters
}

export interface EngineHttpRequestNodeParameters extends BaseNodeParameters {
  url: string
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
}

// - If
export interface EngineIfNode extends BaseNodeType {
  description: EngineIfNodeDescription
}

export interface EngineIfNodeDescription extends BaseNodeTypeDescription {
  type: "if"
  parameters: EngineIfNodeParameters
}

export interface EngineIfNodeParameters extends BaseNodeParameters {
  condition: string
}

// - Log
export interface EngineLogNode extends BaseNodeType {
  description: EngineLogNodeDescription
}

export interface EngineLogNodeDescription extends BaseNodeTypeDescription {
  type: "log"
  parameters: EngineLogNodeParameters
}

export interface EngineLogNodeParameters extends BaseNodeParameters {
  message: string
}

// Merge Node
export interface EngineMergeNode extends BaseNodeType {
  description: EngineMergeNodeDescription
}

export interface EngineMergeNodeDescription extends BaseNodeTypeDescription {
  type: "merge"
  parameters: EngineMergeNodeParameters
}

export interface EngineMergeNodeParameters extends BaseNodeParameters {
  inputCounts: number
}

export type EngineNodeType =
  | EngineTriggerNode
  | EngineHttpRequestNode
  | EngineIfNode
  | EngineLogNode
  | EngineMergeNode
export type EngineNodeTypes = EngineNodeType["description"]["type"]

export interface EngineNodeExecutionData {
  json: object
}
