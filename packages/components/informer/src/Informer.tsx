import * as React from "react";
import { Informer as UIInformer } from "@gpn-design/uikit/Informer";

type InformerProps = React.ComponentProps<typeof UIInformer>;

export const Informer: React.FC<InformerProps> = (props) => {
  return <UIInformer {...props} />;
};
