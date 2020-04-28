import * as React from 'react';
import { User as BaseUser } from '@gpn-design/uikit/User';

type UserProps = React.ComponentProps<typeof BaseUser>;

export const User: React.FC<UserProps> = (props) => {
  return <BaseUser {...props} />;
};
