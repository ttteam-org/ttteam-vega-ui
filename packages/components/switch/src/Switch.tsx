import * as React from 'react';
import { Switch as UISwitch } from '@gpn-design/uikit/Switch';

type SwitchProps = React.ComponentProps<typeof UISwitch>;

export const Switch: React.FC<SwitchProps> = (props) => {
  return <UISwitch {...props} />;
};
