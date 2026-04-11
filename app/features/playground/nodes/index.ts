import type {
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
