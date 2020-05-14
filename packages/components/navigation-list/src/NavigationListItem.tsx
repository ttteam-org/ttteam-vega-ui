import React from 'react';

import { cnNavigationList } from './helpers/cnNavigationList';

export type NavigationListItemProps = {
  active?: boolean;
  className?: string;
  onClick?: (event: React.SyntheticEvent) => void;
};

export const NavigationListItem: React.FC<NavigationListItemProps> = ({
  active,
  className,
  onClick,
  children,
  ...rest
}) => {
  const handleClick = (event: React.SyntheticEvent): void => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <li>
      <button
        type="button"
        className={cnNavigationList('Item', { active }).mix(className)}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </button>
    </li>
  );
};
