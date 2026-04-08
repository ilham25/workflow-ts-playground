import type {
  AppEdgeComponentProps,
  AppNodeComponentProps,
  AppNodeComponentType,
  AppNodeTypes,
} from "../types/app-node"
import { node as httpRequestNode } from "./http-request/components/node"
import { node as ifNode } from "./if/components/node"
import { node as logNode } from "./log/components/node"
import { node as mergeNode } from "./merge/components/node"
import { node as triggerNode } from "./trigger/components/node"
import type { ComponentType } from "react"

export const appNodeComponents: AppNodeComponentType = {
  trigger: triggerNode,
  httpRequest: httpRequestNode,
  if: ifNode,
  log: logNode,
  merge: mergeNode,
}

export const nodeTypes: Record<
  AppNodeTypes,
  ComponentType<AppNodeComponentProps["node"]>
> = {
  trigger: (node) =>
    appNodeComponents.trigger.playgroundComponent({
      node,
    }),
  httpRequest: (node) =>
    appNodeComponents.httpRequest.playgroundComponent({
      node,
    }),
  if: (node) =>
    appNodeComponents.if.playgroundComponent({
      node,
    }),
  log: (node) =>
    appNodeComponents.log.playgroundComponent({
      node,
    }),
  merge: (node) =>
    appNodeComponents.merge.playgroundComponent({
      node,
    }),
}

export const edgeTypes: Record<
  AppNodeTypes,
  ComponentType<AppEdgeComponentProps["edge"]>
> = {
  trigger: (edge) => {
    edge.data
    return appNodeComponents.trigger.edgeComponent({
      edge,
    })
  },
  httpRequest: (edge) =>
    appNodeComponents.httpRequest.edgeComponent({
      edge,
    }),
  if: (edge) =>
    appNodeComponents.if.edgeComponent({
      edge,
    }),
  log: (edge) =>
    appNodeComponents.log.edgeComponent({
      edge,
    }),
  merge: (edge) =>
    appNodeComponents.merge.edgeComponent({
      edge,
    }),
}
