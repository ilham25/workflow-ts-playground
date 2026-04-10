import { json } from "@codemirror/lang-json"
import CodeMirror from "@uiw/react-codemirror"
import { EditorView } from "@codemirror/view"
interface JsonCodeEditorProps {
  value: string
}

export const JsonCodeEditor = ({ value }: JsonCodeEditorProps) => {
  return (
    <div className="h-full [&_.cm-editor]:h-full [&_.cm-foldGutter]:w-4 [&_.cm-foldGutter_span]:text-base [&_.cm-scroller]:overflow-auto">
      <CodeMirror
        value={value}
        height="100%"
        theme="light"
        extensions={[json(), EditorView.lineWrapping]}
        readOnly
        basicSetup={{ lineNumbers: false }}
      />
    </div>
  )
}
