import React from 'react';

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Button } from './Button';

storiesOf('ui/Badge', module)
  .addDecorator(withSmartKnobs({ ignoreProps: ['withIcon', 'icon'] }))
  .add('interactive', () => (
    <Button wpSize="s" view="filled" status="normal">
      {text('children', '+4.8%')}
    </Button>
  ));
