import React from 'react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { IconUser } from '@vega-ui/icon';

import { Informer } from './Informer';

const defaultKnobs = (): Record<string, string> => ({
  status: select('status', ['system', 'alert', 'warning', 'success'], 'system'),
  title: text('title', 'Title'),
  label: text('label', 'I am informer'),
  view: select('view', ['filled', 'bordered'], 'filled'),
});

storiesOf('ui/Informer', module)
  .addDecorator(withKnobs)
  .add('С текстом', () => <Informer {...defaultKnobs()} />)
  .add('С текстом и иконкой', () => <Informer icon={IconUser} {...defaultKnobs()} />);
