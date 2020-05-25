import * as React from 'react';
import { block } from 'bem-cn';

import './PageBanner.css';

export type PageBannerProps = {
  className?: string;
  title?: string;
  description?: string;
};

const cnPageBanner = block('VegaPageBanner');

export const PageBanner: React.FC<PageBannerProps> = ({ className, title, description }) => {
  return (
    <header className={cnPageBanner.mix(className)}>
      <div className={cnPageBanner('Content')}>
        {title && (
          <h1 className={cnPageBanner('Title')} title={title}>
            {title}
          </h1>
        )}
        {description && (
          <p className={cnPageBanner('Description')} title={description}>
            {description}
          </p>
        )}
      </div>
    </header>
  );
};
