import React from 'react';

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';

storiesOf('ui/Button', module)
  .add('interactive', () => (
    <Button wpSize="m" view="primary">
      {text('children', 'test button')}
    </Button>
  ));
