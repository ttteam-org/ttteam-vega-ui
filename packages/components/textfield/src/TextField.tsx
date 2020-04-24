import * as React from "react";
import { TextField as UITextField } from "@gpn-design/uikit/TextField";

type TextFieldProps = React.ComponentProps<typeof UITextField>;

export const TextField: React.FC<TextFieldProps> = (props) => {
  return <UITextField {...props} />;
};
