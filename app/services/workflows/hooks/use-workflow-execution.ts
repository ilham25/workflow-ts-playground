import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"

const baseUrl = "http://localhost:3000"

export function useWorkflowExecution(workflowId: string) {
  const queryClient = useQueryClient()

  // 1. Trigger execution, get jobId
  const { data, mutate: execute } = useMutation<
    { jobId: string },
    Error,
    { jobId: string }
  >({
    mutationFn: async (payload) => {
      const res = await fetch(
        `${baseUrl}/workflows/execute?workflowId=${workflowId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
      return res.json() // { jobId }
    },
  })

  const jobId = data?.jobId

  // 2. Open SSE stream once we have a jobId
  useEffect(() => {
    if (!jobId) return

    const es = new EventSource(`${baseUrl}/workflows/track/${jobId}`)

    es.addEventListener("node:update", (e) => {
      const update = JSON.parse(e.data)

      console.log("event", update)

      // Push into query cache — components using useQuery('nodes') re-render automatically
      //   queryClient.setQueryData(["nodes", jobId], (prev: NodeState[]) =>
      //     prev.map((n) => (n.id === update.nodeId ? { ...n, ...update } : n))
      //   )
    })

    es.addEventListener("done", () => {
      es.close()
      // Optionally invalidate to refetch final state
      queryClient.invalidateQueries({ queryKey: ["nodes", jobId] })
    })

    es.onerror = () => es.close()

    return () => es.close() // cleanup on unmount
  }, [jobId])

  return { execute, jobId }
}
