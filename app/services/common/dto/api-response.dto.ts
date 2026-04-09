export interface BaseApiResponseDTO {
  success: boolean
  message?: string
}

export type ApiSuccessResponseDTO<T> = BaseApiResponseDTO & {
  data: T
}

export type ApiErrorResponseDTO = BaseApiResponseDTO & {
  message: string
}

export type ApiResponseDTO<T = null> =
  | ApiSuccessResponseDTO<T>
  | ApiErrorResponseDTO
