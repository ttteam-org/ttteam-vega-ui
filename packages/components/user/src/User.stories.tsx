import React from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { User } from './User';

const defaultKnobs = (): Record<string, string | boolean | undefined> => ({
  view: select('view', ['ghost', 'clear'], 'clear'),
  width: select('width', ['full', 'default'], 'default'),
  size: select('size', ['s', 'm'], 'm'),
  status: select('status', ['available', 'remote', 'out'], undefined),
  avatarUrl: text(
    'avatarUrl',
    'https://pbs.twimg.com/profile_images/896978374232600577/v2xEJoxM_400x400.jpg',
  ),
  name: text('Name', `Имя Фамилия`),
  info: text('Info', 'Сегодня на Почтамской'),
  withArrow: boolean('withArrow', false),
  onlyAvatar: boolean('onlyAvatar', false),
});

storiesOf('ui/User', module)
  .addDecorator(withKnobs)
  .add('User', () => <User {...defaultKnobs()} />);
