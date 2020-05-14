import React from 'react';
import { block } from 'bem-cn';

import './PageFooter.css';

const cnPageFooter = block('VegaPageFooter');

export type PageFooterProps = {
  className?: string;
  testId?: string;
};

export const PageFooter: React.FC<PageFooterProps> = ({
  className,
  testId = 'VegaPageFooter',
  children,
}) => {
  return (
    <div className={cnPageFooter({}).mix(className)} data-testid={testId}>
      {children}
    </div>
  );
};
