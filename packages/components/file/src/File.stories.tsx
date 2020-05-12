import React from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { File } from './File';

const defaultKnobs = (): Record<string, string | boolean> => ({
  extension: text('extension', 'png'),
  loading: boolean('loading', false),
  size: select('size', ['m', 's'], 'm'),
});

storiesOf('ui/File', module)
  .addDecorator(withKnobs)
  .addParameters({ metadata: { author: 'Дизайн-система ГПН', status: 'Approved' } })
  .add('File', () => <File {...defaultKnobs()} />);
