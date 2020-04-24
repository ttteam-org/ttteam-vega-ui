import * as React from 'react';
import { Text as BaseText } from '@gpn-design/uikit/Text';

type TextProps = React.ComponentProps<typeof BaseText>;

export const Text: React.FC<TextProps> = (props) => {
  return (
    <BaseText {...props} />
  );
};