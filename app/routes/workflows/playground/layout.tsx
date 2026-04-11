import { Outlet } from "react-router"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable"
import { LogContent } from "~/features/playground/components/content/log-content"
import { usePlaygroundStore } from "~/features/playground/stores/use-playground-store"

export default function Layout() {
  const isShowLog = usePlaygroundStore((s) => s.isShowLog)
  return (
    <main className="flex h-dvh w-dvw flex-col">
      <ResizablePanelGroup orientation="vertical">
        <ResizablePanel className="flex-1" defaultSize={"70%"} minSize={"50%"}>
          <Outlet />
        </ResizablePanel>
        {isShowLog && (
          <>
            <ResizableHandle />
            <ResizablePanel defaultSize={"30%"} minSize={"30%"}>
              <LogContent />
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </main>
  )
}
