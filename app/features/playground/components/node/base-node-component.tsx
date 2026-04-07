import type { NodeProps } from "@xyflow/react"
import { cn } from "~/lib/utils"

export interface BaseNodeComponentProps {
  node: NodeProps
  children: React.ReactNode
  isStartNode?: boolean
  isEndNode?: boolean
  className?: string
}

export const BaseNodeComponent = ({
  children,
  isStartNode,
  isEndNode,
  className,
}: BaseNodeComponentProps) => {
  return (
    <div
      className={cn(
        "flex h-20 w-20 items-center justify-center rounded-md border border-border bg-muted",
        isStartNode && "rounded-l-3xl",
        isEndNode && "rounded-r-3xl",
        className
      )}
    >
      {children}
    </div>
  )
}
