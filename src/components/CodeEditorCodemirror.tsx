import { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { basicSetup } from "codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { pythonSample } from "../utils/sampleCode";

export const CodeMirrorEditor = ({
  editorViewRef,
}: {
  editorViewRef: React.MutableRefObject<EditorView | null>;
}) => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const startState = EditorState.create({
      doc: pythonSample,
      extensions: [basicSetup, keymap.of(defaultKeymap), python(), oneDark],
    });

    const view = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    editorViewRef.current = view;

    return () => {
      view.destroy(); // cleanup
      editorViewRef.current = null;
    };
  }, []);

  return (
    <div ref={editorRef} className="w-full h-full border overflow-scroll" />
  );
};
