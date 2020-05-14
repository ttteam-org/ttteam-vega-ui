import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { PageBanner } from './PageBanner';

const defaultKnobs = (): Record<string, string> => ({
  title: text('title', 'Усть-Енисей'),
  description: text('description', 'Россия, Ямало-Ненецкий АО, Усть-Енисей'),
});

storiesOf('ui/PageBanner', module)
  .addDecorator(withKnobs)
  .addParameters({ metadata: { author: 'CSSSR', status: 'Draft' } })
  .add('Page banner', () => <PageBanner {...defaultKnobs()} />);
