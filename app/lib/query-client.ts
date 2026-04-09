import { QueryClient } from "@tanstack/react-query"
// import { toast } from "sonner";
// import type { ApiErrorResponseDTO } from "~/services/common/dto/api-response.dto";

export const queryClient = new QueryClient({
  defaultOptions: {
    // mutations: {
    //   onError(error, variables, onMutateResult, context) {
    //     const httpResult = error as unknown as ApiErrorResponseDTO;
    //     toast.error(httpResult.message, {
    //       className: "group-[.toaster]:bg-destructive",
    //     });
    //   },
    // },
  },
})
