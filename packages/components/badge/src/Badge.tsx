import * as React from 'react';
import { Badge as UIBadge } from '@gpn-design/uikit/Badge';

type BadgeProps = React.ComponentProps<typeof UIBadge>;

export const Badge: React.FC<BadgeProps> = (props) => {
  return <UIBadge {...props} />;
};
