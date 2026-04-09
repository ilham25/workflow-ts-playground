import { QueryClientProvider } from "@tanstack/react-query"
import type { PropsWithChildren } from "react"
import { queryClient } from "./lib/query-client"

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <TooltipProvider>{children}</TooltipProvider> */}
      {/* <Toaster position="bottom-center" /> */}
    </QueryClientProvider>
  )
}
