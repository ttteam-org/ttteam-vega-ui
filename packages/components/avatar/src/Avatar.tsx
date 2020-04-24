import * as React from "react";
import { Avatar as UIAvatar } from "@gpn-design/uikit/Avatar";

type AvatarProps = React.ComponentProps<typeof UIAvatar>;

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <UIAvatar {...props} />;
};
