import React from 'react';

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Text } from './Text';


storiesOf('ui/Text', module)
  .add('default', () => {
    return <Text>{text('children', 'Дефолтный текст')}</Text>;
  });