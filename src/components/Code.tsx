import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";

export interface CodeProps {
  language?: string;
  children: string | string[];
}

export const Code = (props: CodeProps) => {
  const { language = "javascript", children } = props;
  return (
    <SyntaxHighlighter language={language} style={agate}>
      {children}
    </SyntaxHighlighter>
  );
};
