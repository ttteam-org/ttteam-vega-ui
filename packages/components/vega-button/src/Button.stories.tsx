import React from 'react';

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';


storiesOf('ui/VegaButton', module)
  .add('interactive', () => {
    const label = text('label', 'Дефолтный текст');
    return <Button size="m" view="primary" label={label} />
  });