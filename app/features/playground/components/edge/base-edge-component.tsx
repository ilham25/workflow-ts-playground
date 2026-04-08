import {
  getStraightPath,
  BaseEdge,
  type EdgeProps,
  type Edge,
} from "@xyflow/react"

type CustomEdge = Edge<{}, "custom">

export function BaseEdgeComponent({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: EdgeProps<CustomEdge>) {
  const [edgePath] = getStraightPath({ sourceX, sourceY, targetX, targetY })

  return <BaseEdge id={id} path={edgePath} />
}
