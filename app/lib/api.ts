import type {
  ApiErrorResponseDTO,
  ApiResponseDTO,
} from "~/services/common/dto/api-response.dto"

const baseUrl = import.meta.env.VITE_API_URL ?? "http://localhost:3000"

export const api = {
  get: async <T>(url: string): Promise<ApiResponseDTO<T>> => {
    try {
      const response = await fetch(`${baseUrl}${url}`, { method: "GET" })
      return (await response.json()) as ApiResponseDTO<T>
    } catch (error) {
      return Promise.reject({
        message: String(error),
        success: false,
      } as ApiErrorResponseDTO)
    }
  },
  post: async <T>(url: string, body: any): Promise<ApiResponseDTO<T>> => {
    try {
      console.log(url, "url")
      const response = await fetch(`${baseUrl}${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
      return (await response.json()) as ApiResponseDTO<T>
    } catch (error) {
      return Promise.reject({
        message: String(error),
        success: false,
      } as ApiErrorResponseDTO)
    }
  },
  sse: (url: string) => {
    const eventSource = new EventSource(`${baseUrl}${url}`)
    return eventSource
  },
}
