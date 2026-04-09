import { useMutation } from "@tanstack/react-query"
import { type ExecuteWorkflowEntity } from "../entities/execute-workflow.entity"
import type { ExecuteWorkflowDTO } from "../dto/execute-workflow.dto"
import type { OmittedUseMutationOptions } from "~/services/common/types"
import type { ApiSuccessResponseDTO } from "~/services/common/dto/api-response.dto"
import { workflowApi } from "../api"

export const useExecuteWorkflow = (
  options?: OmittedUseMutationOptions<
    ApiSuccessResponseDTO<ExecuteWorkflowEntity>,
    Error,
    ExecuteWorkflowDTO
  >
) =>
  useMutation<
    ApiSuccessResponseDTO<ExecuteWorkflowEntity>,
    Error,
    ExecuteWorkflowDTO
  >({
    ...options,
    mutationFn: async (payload) => {
      return workflowApi.execute(payload) as Promise<
        ApiSuccessResponseDTO<ExecuteWorkflowEntity>
      >
    },
  })
