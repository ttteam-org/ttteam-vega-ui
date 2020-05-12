import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Logo } from './Logo';

storiesOf('ui/Logo', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Logo />;
  });
