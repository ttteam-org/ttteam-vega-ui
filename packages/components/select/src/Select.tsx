import * as React from "react";
import { Select as UISelect } from "@gpn-design/uikit/Select";

type SelectProps = React.ComponentProps<typeof UISelect>;

export const Select: React.FC<SelectProps> = (props) => {
  return <UISelect {...props} />;
};
