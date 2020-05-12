import React from 'react';
import { storiesOf } from '@storybook/react';

import { Header } from './Header';

storiesOf('ui/Header', module).add('Header', () => {
  return <Header />;
});
