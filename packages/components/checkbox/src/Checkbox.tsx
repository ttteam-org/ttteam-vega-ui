import * as React from 'react';
import { Checkbox as UICheckbox } from '@gpn-design/uikit/Checkbox';

type CheckboxProps = React.ComponentProps<typeof UICheckbox>;

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <UICheckbox {...props} />;
};
