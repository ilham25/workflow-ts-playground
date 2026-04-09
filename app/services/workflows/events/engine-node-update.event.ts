import type {
  EngineNodeExecutionData,
  EngineNodeType,
} from "../entities/engine-node.entity"

export interface BaseEngineEvent {
  id: string
}

interface EngineNodeIdleEvent extends BaseEngineEvent {
  data: {
    node: EngineNodeType
    data: null
    status: "idle"
  }
}

interface EngineNodeProcessingEvent extends BaseEngineEvent {
  data: {
    node: EngineNodeType
    data: null
    status: "processing"
  }
}

interface EngineNodeSuccessEvent extends BaseEngineEvent {
  data: {
    status: "success"
    node: EngineNodeType
    data: {
      input: EngineNodeExecutionData[][]
      output: EngineNodeExecutionData[][]
    }
  }
}

interface EngineNodeErrorEvent extends BaseEngineEvent {
  data: {
    status: "error"
    node: EngineNodeType
    data: {
      error: string
    }
  }
}

export type EngineNodeUpdateEvent = (
  | EngineNodeIdleEvent
  | EngineNodeProcessingEvent
  | EngineNodeSuccessEvent
  | EngineNodeErrorEvent
) & {
  name: "node:update"
}
