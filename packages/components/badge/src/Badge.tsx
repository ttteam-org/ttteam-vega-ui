import * as React from 'react';
import { Badge as BaseBadge } from '@gpn-design/uikit/Badge';

type BadgeProps = React.ComponentProps<typeof BaseBadge>;

export const Badge: React.FC<BadgeProps> = (props) => {
  return <BaseBadge size="m" {...props} />;
};
