import type { ApiResponseDTO } from "~/services/common/dto/api-response.dto"
import type { Workflow } from "../entities/workflow-node.entity"
import { api } from "~/lib/api"
import type { ExecuteWorkflowDTO } from "../dto/execute-workflow.dto"
import type { ExecuteWorkflowEntity } from "../entities/execute-workflow.entity"
import { createQueryKeyFactory } from "~/services/common/utils/query-key-factory"
import { nanoid } from "nanoid"

const baseUrl = "/workflows"

export const workflowApi = {
  getById: async (id: string): Promise<ApiResponseDTO<Workflow>> => {
    return await api.get<Workflow>(`${baseUrl}/${id}`)
  },
  execute: async (
    dto: ExecuteWorkflowDTO
  ): Promise<ApiResponseDTO<ExecuteWorkflowEntity>> => {
    return await api.post<ExecuteWorkflowEntity>(`${baseUrl}/execute`, {
      jobId: nanoid(),
      ...dto,
    })
  },
  track: async (jobId: string) => {
    return await api.sse(`${baseUrl}/track/${jobId}`)
  },
}

const baseKeys = createQueryKeyFactory("workflows")

export const workflowKeys = baseKeys
