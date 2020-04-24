import * as React from "react";
import { File as UIFile } from "@gpn-design/uikit/File";

type FileProps = React.ComponentProps<typeof UIFile>;

export const File: React.FC<FileProps> = (props) => {
  return <UIFile {...props} />;
};
