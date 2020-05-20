import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { PageBanner, PageBannerProps } from './PageBanner';

const defaultKnobs = (): PageBannerProps => ({
  title: text('title', 'Усть-Енисей'),
  description: text('description', 'Россия, Ямало-Ненецкий АО, Усть-Енисей'),
});

storiesOf('ui/PageBanner', module)
  .addDecorator(withKnobs)
  .addParameters({ metadata: { author: 'CSSSR', status: 'Approved' } })
  .add('Page banner', () => <PageBanner {...defaultKnobs()} />);
