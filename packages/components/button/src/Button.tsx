import React from 'react';
import { Button as BaseButton } from '@gpn-design/uikit/Button';

type ButtonProps = React.ComponentProps<typeof BaseButton>;

export const Button: React.FC<ButtonProps> = (props) => {
  const allProps = { ...props };

  const className = 'button-classname';

  return <BaseButton className={className} {...allProps} />;
};
