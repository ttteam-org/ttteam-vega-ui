import * as React from "react";
import { Popover as UIPopover } from "@gpn-design/uikit/Popover";

type PopoverProps = React.ComponentProps<typeof UIPopover>;

export const Popover: React.FC<PopoverProps> = (props) => {
  return <UIPopover {...props} />;
};
