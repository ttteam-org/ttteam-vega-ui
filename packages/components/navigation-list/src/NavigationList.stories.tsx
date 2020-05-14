/** @jsx jsx */

import { jsx } from '@emotion/core';
import { IconCheck } from '@gpn-prototypes/vega-icons';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { NavigationList, NavigationListProps } from './NavigationList';

const cssWrapper = {
  width: '302px',
};

const cssWithIcon = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

const cssIcon = {
  marginLeft: 'auto',
};

const knobs = (): NavigationListProps => ({
  ordered: boolean('ordered', false),
});

storiesOf('ui/NavigationList', module)
  .addDecorator(withKnobs)
  .add('Без иконки и разделителя', () => (
    <div css={cssWrapper}>
      <NavigationList {...knobs()}>
        <NavigationList.Item active>Описание проекта</NavigationList.Item>
        <NavigationList.Item>Участники</NavigationList.Item>
        <NavigationList.Item>Связанные документы и файлы</NavigationList.Item>
      </NavigationList>
    </div>
  ))
  .add('C иконкой', () => (
    <div css={cssWrapper}>
      <NavigationList {...knobs()}>
        <NavigationList.Item css={cssWithIcon}>
          Описание проекта
          <IconCheck size="s" view="success" css={cssIcon} />
        </NavigationList.Item>
        <NavigationList.Item active>Участники</NavigationList.Item>
        <NavigationList.Item>Связанные документы и файлы</NavigationList.Item>
      </NavigationList>
    </div>
  ))
  .add('C разделителем внутри списка', () => (
    <div css={cssWrapper}>
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
    <div css={cssWrapper}>
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
