import { getStraightPath, BaseEdge, type EdgeProps } from "@xyflow/react"
import type { AppEdgeComponentProps } from "~/features/playground/types/app-node"

export function HttpRequestEdgeComponent({ edge }: AppEdgeComponentProps) {
  const { id, sourceX, sourceY, targetX, targetY } = edge
  const [edgePath] = getStraightPath({ sourceX, sourceY, targetX, targetY })

  return <BaseEdge id={id} path={edgePath} />
}
