import { Badge } from "~/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import type { AppNodePropertiesComponentProps } from "~/features/playground/types/app-node"

interface BasePropertiesComponentProps extends AppNodePropertiesComponentProps {
  children: React.ReactNode
}

export const BasePropertiesComponent = ({
  node,
  onOpenChange,
  open,
  children,
}: BasePropertiesComponentProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[calc(100%-2rem)]"
      >
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>
              [{node.data.name}] {node.data.displayName}
            </DialogTitle>
            <Badge>{node.data.result.status}</Badge>
          </div>
        </DialogHeader>
        <div className="flex h-[80dvh] flex-col bg-blue-500">
          {children}
          {node.data.result.status === "success" && (
            <Tabs
              defaultValue="input"
              className="mt-2 flex w-full flex-1 grow flex-col bg-purple-300"
            >
              <TabsList className="w-full shrink-0" variant={"line"}>
                <TabsTrigger value="input">Input</TabsTrigger>
                <TabsTrigger value="output">Output</TabsTrigger>
              </TabsList>
              <TabsContent
                value="input"
                className="min-h-0 flex-1 overflow-auto"
              >
                <pre className="rounded-md bg-muted p-2">
                  {JSON.stringify(node.data.result.input, null, 2)}
                </pre>
              </TabsContent>
              <TabsContent
                value="output"
                className="min-h-0 flex-1 overflow-auto"
              >
                {/* <pre className="rounded-md bg-muted p-2">
                  {JSON.stringify(node.data.result.output, null, 2)}
                </pre> */}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
