import { useEffect } from "react"
import type { EngineNodeUpdateEvent } from "../events/engine-node-update.event"
import { useExecuteWorkflow } from "./use-execute-workflow"
import { api } from "~/lib/api"

export function useWorkflowExecution(
  cb: (data: EngineNodeUpdateEvent["data"]) => void
) {
  const { data, mutate: execute } = useExecuteWorkflow()
  const jobId = data?.data.jobId

  useEffect(() => {
    if (!jobId) return

    const es = api.sse(`/workflows/track/${jobId}`)

    es.addEventListener("node:update", (e) => {
      const data = JSON.parse(e.data) as EngineNodeUpdateEvent["data"]
      let color: string = "orange"
      if (data.status === "success") {
        color = "green"
      }
      if (data.status === "error") {
        color = "red"
      }
      console.log(
        `%c${data.node.description.name}: ${data.status}`,
        `color: ${color}; font-weight: bold`
      )
      if (data.status === "error") {
        console.error(data.data.error)
      }
      if (data.status === "success") {
        console.log("Input:", data.data.input)
        console.log("Output:", data.data.output)
      }
      cb(data)
    })

    es.addEventListener("done", () => {
      es.close()
    })

    es.onerror = () => es.close()

    return () => es.close() // cleanup on unmount
  }, [jobId])

  return { execute, jobId }
}
