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
    <div className="relative flex flex-col items-center">
      <div
        className={cn(
          "flex h-20 w-20 items-center justify-center rounded-md border border-border bg-muted outline-2 outline-offset-2 outline-transparent",
          isStartNode && "rounded-l-3xl",
          isEndNode && "rounded-r-3xl",
          result.status === "processing" && "outline-yellow-500",
          result.status === "success" && "outline-green-500",
          result.status === "error" && "outline-red-500",
          className
        )}
      >
        {children}
      </div>
      <div className="pointer-events-none absolute top-full left-1/2 mt-1 max-w-20 -translate-x-1/2 text-center text-xs whitespace-nowrap text-gray-500">
        {node.data.displayName}
      </div>
    </div>
  )
}
