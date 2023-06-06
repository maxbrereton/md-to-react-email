import * as React from "react";
import { StylesType } from "../types";
import { parseMarkdownToReactEmail } from "../utils";

interface ReactEmailMarkdownProps {
  markdown: string;
  markdownCustomStyles?: StylesType;
  markdownContainerStyles?: React.CSSProperties;
}

export const ReactEmailMarkdown: React.FC<ReactEmailMarkdownProps> = ({
  markdown,
  markdownCustomStyles,
  markdownContainerStyles,
}) => {
  const parsedMarkdown = parseMarkdownToReactEmail(
    markdown,
    markdownCustomStyles
  );

  return (
    <div
      style={markdownContainerStyles}
      dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
    />
  );
};