import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable"
import { usePlaygroundStore } from "../../stores/use-playground-store"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "~/components/ui/item"
import { appNodeComponents } from "../../nodes"
import { Braces, ChevronRightIcon } from "lucide-react"
import { Label } from "~/components/ui/label"
import { useState } from "react"
import { type AppNode } from "../../types/app-node"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty"
import { JsonCodeEditor } from "../code/json-code-editor"
import { cn } from "~/lib/utils"

export function LogContent() {
  const [activeNode, setActiveNode] = useState<AppNode | null>(() => null)
  const nodes = usePlaygroundStore((s) => s.nodes)

  const onSelect = (node: AppNode) => {
    setActiveNode(node)
  }

  return (
    <div className="h-full w-dvw bg-background">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize={"20%"} minSize={"20%"} maxSize={"30%"}>
          <div className="flex h-full flex-col overflow-hidden">
            <div className="border-b border-border bg-muted px-4 py-2">
              <h1>Nodes</h1>
            </div>
            <div className="min-h-0 grow overflow-auto p-4">
              <ItemGroup>
                {nodes.map((n) => {
                  console.log(n.data.result)
                  const Icon = appNodeComponents[n.type].icon
                  return (
                    <Item
                      key={n.id}
                      onClick={() => onSelect(n)}
                      variant="outline"
                      size="sm"
                      className={cn(
                        "hover:bg-muted",
                        activeNode?.id === n.id && "bg-muted/80",
                        n.data.result.status === "processing" &&
                          "border-yellow-500",
                        n.data.result.status === "success" &&
                          "border-green-500",
                        n.data.result.status === "error" && "border-red-500"
                      )}
                    >
                      <ItemMedia className="">
                        <Icon className="size-4" />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>{n.data.displayName}</ItemTitle>
                      </ItemContent>
                      <ItemActions>
                        <ChevronRightIcon className="size-4" />
                      </ItemActions>
                    </Item>
                  )
                })}
              </ItemGroup>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={"80%"} minSize={"50%"}>
          <div className="flex h-full flex-col overflow-hidden">
            <div className="border-b border-border bg-muted px-4 py-2">
              <h1>Result</h1>
            </div>
            {activeNode && (
              <div className="grid min-h-0 grow grid-cols-2 gap-4 overflow-auto p-4">
                <div className="col-span-1 h-full w-full overflow-auto rounded-md border p-2">
                  <Label className="mb-2">Input</Label>
                  {activeNode.data.result.status !== "success" && (
                    <Empty>
                      <EmptyHeader>
                        <EmptyMedia variant="icon">
                          <Braces />
                        </EmptyMedia>
                        <EmptyTitle>No Input Yet</EmptyTitle>
                        <EmptyDescription>
                          This node has no input yet.
                        </EmptyDescription>
                      </EmptyHeader>
                    </Empty>
                  )}
                  {activeNode.data.result.status === "success" && (
                    <JsonCodeEditor
                      value={JSON.stringify(
                        activeNode.data.result.input,
                        null,
                        2
                      )}
                    />
                  )}
                </div>
                <div className="col-span-1 h-full w-full overflow-auto rounded-md border p-2">
                  <Label className="mb-2">Output</Label>
                  {activeNode.data.result.status !== "success" && (
                    <Empty>
                      <EmptyHeader>
                        <EmptyMedia variant="icon">
                          <Braces />
                        </EmptyMedia>
                        <EmptyTitle>No Output Yet</EmptyTitle>
                        <EmptyDescription>
                          This node has no output yet.
                        </EmptyDescription>
                      </EmptyHeader>
                    </Empty>
                  )}
                  {activeNode.data.result.status === "success" && (
                    <JsonCodeEditor
                      value={JSON.stringify(
                        activeNode.data.result.output,
                        null,
                        2
                      )}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
