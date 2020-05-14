import React from 'react';

import { cnNavigationList } from './helpers/cnNavigationList';
import { NavigationListDelimiter } from './NavigationListDelimiter';
import { NavigationListItem } from './NavigationListItem';

import './NavigationList.css';

export type NavigationListProps = {
  ordered?: boolean;
  className?: string;
};

type NavigationList<T> = React.FC<T> & {
  Item: typeof NavigationListItem;
  Delimiter: typeof NavigationListDelimiter;
};

export const NavigationList: NavigationList<NavigationListProps> = ({
  ordered = false,
  className,
  children,
  ...rest
}) => {
  const Component = ordered ? 'ol' : 'ul';

  return (
    <Component className={cnNavigationList({ ordered }).mix(className)} {...rest}>
      {children}
    </Component>
  );
};

NavigationList.Item = NavigationListItem;
NavigationList.Delimiter = NavigationListDelimiter;
