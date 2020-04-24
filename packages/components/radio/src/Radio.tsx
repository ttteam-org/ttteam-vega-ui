import * as React from "react";
import { Radio as UIRadio } from "@gpn-design/uikit/Radio";

type RadioProps = React.ComponentProps<typeof UIRadio>;

export const Radio: React.FC<RadioProps> = (props) => {
  return <UIRadio {...props} />;
};
