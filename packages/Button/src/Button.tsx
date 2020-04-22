import * as React from 'react';
import { Button as UikitButton } from '@gpn-design/uikit';

type ButtonProps = React.ComponentProps<typeof UikitButton>;


export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <UikitButton {...props} />
  )
}