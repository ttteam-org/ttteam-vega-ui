import * as React from "react";
import { Button } from "@gpn-design/uikit/Button";

type VegaButtonProps = React.ComponentProps<typeof Button>;

export const VegaButton: React.FC<VegaButtonProps> = (props) => {
  return <Button {...props} />;
};
