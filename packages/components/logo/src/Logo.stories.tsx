import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Logo } from './Logo';

storiesOf('ui/Logo', module)
  .addDecorator(withKnobs)
  .addParameters({ metadata: { author: 'Роман Гуринович | CSSSR', status: 'Approved' } })
  .add('default', () => {
    return <Logo />;
  });
