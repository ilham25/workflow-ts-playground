import type { OmittedUseQueryOptions } from "~/services/common/types"
import type { Workflow } from "../entities/workflow-node.entity"
import { useQuery } from "@tanstack/react-query"
import { workflowApi, workflowKeys } from "../api"
import type { ApiSuccessResponseDTO } from "~/services/common/dto/api-response.dto"

export const useGetWorkflowById = (
  workflowId: string,
  options?: OmittedUseQueryOptions<ApiSuccessResponseDTO<Workflow>>
) =>
  useQuery<ApiSuccessResponseDTO<Workflow>>({
    ...options,
    queryKey: workflowKeys.detail(workflowId),
    queryFn: async () => {
      return (await workflowApi.getById(
        workflowId
      )) as ApiSuccessResponseDTO<Workflow>
    },
  })
