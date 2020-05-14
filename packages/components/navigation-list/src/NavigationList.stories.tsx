import React from 'react';
import { IconCheck } from '@gpn-prototypes/vega-icons';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { block } from 'bem-cn';

import { NavigationList, NavigationListProps } from './NavigationList';

import './NavigationListStories.css';

const cnStories = block('NavigationListStories');

const knobs = (): NavigationListProps => ({
  ordered: boolean('ordered', false),
});

storiesOf('ui/NavigationList', module)
  .addDecorator(withKnobs)
  .add('Без иконки и разделителя', () => (
    <div className={cnStories('wrapper')}>
      <NavigationList {...knobs()}>
        <NavigationList.Item active>Описание проекта</NavigationList.Item>
        <NavigationList.Item>Участники</NavigationList.Item>
        <NavigationList.Item>Связанные документы и файлы</NavigationList.Item>
      </NavigationList>
    </div>
  ))
  .add('C иконкой', () => (
    <div className={cnStories('wrapper')}>
      <NavigationList {...knobs()}>
        <NavigationList.Item className={cnStories('withIcon').toString()}>
          Описание проекта
          <IconCheck size="s" view="success" className={cnStories('icon').toString()} />
        </NavigationList.Item>
        <NavigationList.Item active>Участники</NavigationList.Item>
        <NavigationList.Item>Связанные документы и файлы</NavigationList.Item>
      </NavigationList>
    </div>
  ))
  .add('C разделителем внутри списка', () => (
    <div className={cnStories('wrapper')}>
      <NavigationList {...knobs()}>
        <NavigationList.Item active>Описание проекта</NavigationList.Item>
        <NavigationList.Item>Участники</NavigationList.Item>
        <NavigationList.Item>Связанные документы и файлы</NavigationList.Item>
        <NavigationList.Delimiter />
        <NavigationList.Item>Похожие проекты</NavigationList.Item>
        <NavigationList.Item>Описание</NavigationList.Item>
      </NavigationList>
    </div>
  ))
  .add('C разделителем между списками', () => (
    <div className={cnStories('wrapper')}>
      <NavigationList {...knobs()}>
        <NavigationList.Item active>Описание проекта</NavigationList.Item>
        <NavigationList.Item>Участники</NavigationList.Item>
        <NavigationList.Item>Связанные документы и файлы</NavigationList.Item>
      </NavigationList>
      <NavigationList.Delimiter />
      <NavigationList {...knobs()}>
        <NavigationList.Item>Похожие проекты</NavigationList.Item>
        <NavigationList.Item>Описание</NavigationList.Item>
      </NavigationList>
    </div>
  ));
