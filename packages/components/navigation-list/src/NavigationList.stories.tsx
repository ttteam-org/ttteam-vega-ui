/** @jsx jsx */

import { useState } from 'react';
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
  .addParameters({ metadata: { author: 'CSSSR', status: 'Approved' } })
  .add('Без иконки и разделителя', () => {
    const [activeItem, setActiveItem] = useState('1');

    return (
      <div css={cssWrapper}>
        <NavigationList {...knobs()}>
          <NavigationList.Item
            active={activeItem === '1'}
            onClick={(): void => {
              setActiveItem('1');
            }}
          >
            Описание проекта
          </NavigationList.Item>
          <NavigationList.Item
            active={activeItem === '2'}
            onClick={(): void => {
              setActiveItem('2');
            }}
          >
            Участники
          </NavigationList.Item>
          <NavigationList.Item
            active={activeItem === '3'}
            onClick={(): void => {
              setActiveItem('3');
            }}
          >
            Связанные документы и файлы
          </NavigationList.Item>
        </NavigationList>
      </div>
    );
  })
  .add('C иконкой', () => {
    const [activeItem, setActiveItem] = useState('2');

    return (
      <div css={cssWrapper}>
        <NavigationList {...knobs()}>
          <NavigationList.Item
            css={cssWithIcon}
            active={activeItem === '1'}
            onClick={(): void => {
              setActiveItem('1');
            }}
          >
            Описание проекта
            <IconCheck size="s" view="success" css={cssIcon} />
          </NavigationList.Item>
          <NavigationList.Item
            active={activeItem === '2'}
            onClick={(): void => {
              setActiveItem('2');
            }}
          >
            Участники
          </NavigationList.Item>
          <NavigationList.Item
            active={activeItem === '3'}
            onClick={(): void => {
              setActiveItem('3');
            }}
          >
            Связанные документы и файлы
          </NavigationList.Item>
        </NavigationList>
      </div>
    );
  })
  .add('C разделителем внутри списка', () => {
    const [activeItem, setActiveItem] = useState('1');

    return (
      <div css={cssWrapper}>
        <NavigationList {...knobs()}>
          <NavigationList.Item
            active={activeItem === '1'}
            onClick={(): void => {
              setActiveItem('1');
            }}
          >
            Описание проекта
          </NavigationList.Item>
          <NavigationList.Item
            active={activeItem === '2'}
            onClick={(): void => {
              setActiveItem('2');
            }}
          >
            Участники
          </NavigationList.Item>
          <NavigationList.Item
            active={activeItem === '3'}
            onClick={(): void => {
              setActiveItem('3');
            }}
          >
            Связанные документы и файлы
          </NavigationList.Item>
          <NavigationList.Delimiter />
          <NavigationList.Item
            active={activeItem === '4'}
            onClick={(): void => {
              setActiveItem('4');
            }}
          >
            Похожие проекты
          </NavigationList.Item>
          <NavigationList.Item
            active={activeItem === '5'}
            onClick={(): void => {
              setActiveItem('5');
            }}
          >
            Описание
          </NavigationList.Item>
        </NavigationList>
      </div>
    );
  })
  .add('C разделителем между списками', () => {
    const [activeItem, setActiveItem] = useState('1');

    return (
      <div css={cssWrapper}>
        <NavigationList {...knobs()}>
          <NavigationList.Item
            active={activeItem === '1'}
            onClick={(): void => {
              setActiveItem('1');
            }}
          >
            Описание проекта
          </NavigationList.Item>
          <NavigationList.Item
            active={activeItem === '2'}
            onClick={(): void => {
              setActiveItem('2');
            }}
          >
            Участники
          </NavigationList.Item>
          <NavigationList.Item
            active={activeItem === '3'}
            onClick={(): void => {
              setActiveItem('3');
            }}
          >
            Связанные документы и файлы
          </NavigationList.Item>
        </NavigationList>
        <NavigationList.Delimiter />
        <NavigationList {...knobs()}>
          <NavigationList.Item
            active={activeItem === '4'}
            onClick={(): void => {
              setActiveItem('4');
            }}
          >
            Похожие проекты
          </NavigationList.Item>
          <NavigationList.Item
            active={activeItem === '5'}
            onClick={(): void => {
              setActiveItem('5');
            }}
          >
            Описание
          </NavigationList.Item>
        </NavigationList>
      </div>
    );
  });
