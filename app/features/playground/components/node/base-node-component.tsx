import type { NodeProps } from "@xyflow/react"
import { cn } from "~/lib/utils"
import type { AppNodeComponentProps } from "../../types/app-node"

export interface BaseNodeComponentProps {
  node: AppNodeComponentProps["node"]
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
  node,
}: BaseNodeComponentProps) => {
  const result = node.data.result

  return (
    <div
      className={cn(
        "flex h-20 w-20 items-center justify-center rounded-md border border-border bg-muted outline-2 outline-offset-2 outline-transparent",
        isStartNode && "rounded-l-3xl",
        isEndNode && "rounded-r-3xl",
        result.status === "processing" && "outline-orange-200",
        result.status === "success" && "outline-green-200",
        result.status === "error" && "outline-red-200",
        className
      )}
    >
      {children}
    </div>
  )
}
