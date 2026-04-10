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
import { JsonCodeEditor } from "../code/json-code-editor"
import { Label } from "~/components/ui/label"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty"
import { Braces } from "lucide-react"

interface BasePropertiesComponentProps extends AppNodePropertiesComponentProps {
  children: React.ReactNode
}

export const BasePropertiesComponent = ({
  node,
  onOpenChange,
  open,
  children,
  outputNames,
  inputNames,
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
        <div className="grid h-[80dvh] grid-cols-3 gap-2">
          <div className="col-span-1 h-full w-full overflow-auto rounded-md border p-2">
            <Label className="mb-2">Input</Label>
            {node.data.result.status !== "success" && (
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
            {node.data.result.status === "success" && (
              <>
                {!inputNames.length ? (
                  <JsonCodeEditor
                    value={JSON.stringify(node.data.result.input[0], null, 2)}
                  />
                ) : (
                  <Tabs defaultValue={inputNames[0]}>
                    <TabsList className="shrink-0" variant={"line"}>
                      {inputNames.map((name) => (
                        <TabsTrigger key={name} value={name}>
                          {name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {inputNames.map((name, index) => (
                      <TabsContent key={name} value={name} className="min-h-0">
                        {node.data.result.status === "success" && (
                          <JsonCodeEditor
                            value={JSON.stringify(
                              node.data.result.input[index],
                              null,
                              2
                            )}
                          />
                        )}
                      </TabsContent>
                    ))}
                  </Tabs>
                )}
              </>
            )}
          </div>
          <div className="col-span-1 rounded-md border p-2">{children}</div>
          <div className="col-span-1 h-full w-full overflow-auto rounded-md border p-2">
            <Label className="mb-2">Output</Label>
            {node.data.result.status !== "success" && (
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
            {node.data.result.status === "success" && (
              <>
                {!outputNames.length ? (
                  <JsonCodeEditor
                    value={JSON.stringify(node.data.result.output[0], null, 2)}
                  />
                ) : (
                  <Tabs defaultValue={outputNames[0]}>
                    <TabsList className="shrink-0" variant={"line"}>
                      {outputNames.map((name) => (
                        <TabsTrigger key={name} value={name}>
                          {name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {outputNames.map((name, index) => (
                      <TabsContent
                        key={name}
                        value={name}
                        className="min-h-0 overflow-auto"
                      >
                        {node.data.result.status === "success" && (
                          <JsonCodeEditor
                            value={JSON.stringify(
                              node.data.result.output[index],
                              null,
                              2
                            )}
                          />
                        )}
                      </TabsContent>
                    ))}
                  </Tabs>
                )}
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
