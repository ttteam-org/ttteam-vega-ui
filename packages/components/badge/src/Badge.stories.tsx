import React from 'react';
import { IconUser } from '@ttteam-org/vega-icons';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Badge } from './Badge';

const knobs = (): Record<string, string | boolean> => ({
  label: text('label', 'Statusing along'),
  size: select('size', ['s', 'm', 'l'], 'm'),
  view: select('view', ['filled', 'stroked'], 'filled'),
  status: select('status', ['success', 'error', 'warning', 'normal', 'system'], 'success'),
  form: select('form', ['default', 'round'], 'default'),
  minified: boolean('minified', false),
});

storiesOf('ui/Badge', module)
  .addDecorator(withKnobs)
  .addParameters({ metadata: { author: 'Дизайн-система ГПН', status: 'Approved' } })
  .add('Текстовый', () => <Badge {...knobs()} />)
  .add('С иконкой', () => <Badge {...knobs()} icon={IconUser} />);
