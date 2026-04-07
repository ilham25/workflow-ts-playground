import type React from "react"
import type { NodeTypes } from "../types/node-type"
import { node as httpRequestNode } from "./http-request/components/node"
import { node as ifNode } from "./if/components/node"
import { node as logNode } from "./log/components/node"
import { node as mergeNode } from "./merge/components/node"
import { node as triggerNode } from "./trigger/components/node"
import type { NodeComponent, NodeComponents } from "./types"
import type { NodeProps } from "@xyflow/react"
import type { ComponentType } from "react"

export const nodes: NodeComponents = {
  trigger: triggerNode,
  httpRequest: httpRequestNode,
  if: ifNode,
  log: logNode,
  merge: mergeNode,
}

export const nodeTypes: Record<
  NodeTypes,
  ComponentType<
    NodeProps & {
      data: any
      type: any
    }
  >
> = {
  trigger: (node) =>
    nodes.trigger.playgroundComponent({ node, icon: nodes.trigger.icon }),
  httpRequest: (node) =>
    nodes.httpRequest.playgroundComponent({
      node,
      icon: nodes.httpRequest.icon,
    }),
  if: (node) => nodes.if.playgroundComponent({ node, icon: nodes.if.icon }),
  log: (node) => nodes.log.playgroundComponent({ node, icon: nodes.log.icon }),
  merge: (node) =>
    nodes.merge.playgroundComponent({ node, icon: nodes.merge.icon }),
}
