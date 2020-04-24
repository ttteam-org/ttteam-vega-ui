import * as React from 'react';
import { User as UIUser } from '@gpn-design/uikit/User';

type UserProps = React.ComponentProps<typeof UIUser>;

export const User: React.FC<UserProps> = (props) => {
  return <UIUser {...props} />;
};
