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
    <div className={cnPageBanner.mix(className)}>
      <div className={cnPageBanner('content')}>
        {title && (
          <h1 className={cnPageBanner('title')} title={title}>
            {title}
          </h1>
        )}
        {description && (
          <p className={cnPageBanner('description')} title={description}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
