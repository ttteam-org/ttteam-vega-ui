import React from 'react';

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { VegaButton } from './VegaButton';

storiesOf('ui/VegaButton', module)
  .add('interactive', () => (
    <VegaButton size="m" view="primary">
      {text('children', 'test button')}
    </VegaButton>
  ));
