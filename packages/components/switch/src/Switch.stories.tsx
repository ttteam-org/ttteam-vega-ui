import React from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Switch } from './Switch';

const knobs = (): Record<string, string | boolean> => ({
  checked: boolean('checked', false),
  disabled: boolean('disabled', false),
  size: select('size', ['m', 'l'], 'm'),
  label: text('label', 'Move me, I beg you!'),
});

storiesOf('ui/Switch', module)
  .addDecorator(withKnobs)
  .add('Свитч', () => <Switch {...knobs()} />);
