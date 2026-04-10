import { useGetWorkflowById } from "~/services/workflows/hooks/use-get-workflow-by-id"
import { usePlaygroundStore } from "../stores/use-playground-store"
import { useEffect } from "react"
import { toPlaygroundData } from "~/services/workflows/entities/adapters/workflow-node.adapter"

export const usePlaygroundData = (workflowId: string) => {
  const { data } = useGetWorkflowById(workflowId)
  const { hydrate, ...rest } = usePlaygroundStore()

  useEffect(() => {
    if (!data) return
    const { edges, nodes } = toPlaygroundData(data.data)
    hydrate(nodes, edges)
  }, [data])

  const activeNode = rest.nodes.find((n) => n.id === rest.selectedNodeId)

  return { ...rest, activeNode }
}
