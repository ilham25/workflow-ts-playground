import type { NodeTypes } from "../types/node-type"
import { node as httpRequestNode } from "./http-request/components/node"
import { node as ifNode } from "./if/components/node"
import { node as logNode } from "./log/components/node"
import { node as mergeNode } from "./merge/components/node"
import { node as triggerNode } from "./trigger/components/node"
import type { NodeComponent, NodeComponents } from "./types"

export const nodes: NodeComponents = {
  trigger: triggerNode,
  httpRequest: httpRequestNode,
  if: ifNode,
  log: logNode,
  merge: mergeNode,
}

export const nodeTypes: Record<
  NodeTypes,
  NodeComponent["playgroundComponent"]
> = {
  trigger: nodes.trigger.playgroundComponent,
  httpRequest: nodes.httpRequest.playgroundComponent,
  if: nodes.if.playgroundComponent,
  log: nodes.log.playgroundComponent,
  merge: nodes.merge.playgroundComponent,
}
