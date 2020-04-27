import React, { useState } from 'react';
import { IIcon } from '@gpn-design/uikit/Icon';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { IconCamera, IconCopy, IconFavorite } from '../../Icon';

import { ChoiceGroup } from './ChoiceGroup';

declare type Item = {
  name: string;
  icon?: React.FC<IIcon>;
};

const items = [
  {
    name: 'один',
  },
  {
    name: 'два',
  },
  {
    name: 'три',
    icon: IconFavorite,
  },
  {
    name: 'четыре',
  },
] as Item[];

const onlyIconItems = [
  {
    name: 'один',
    icon: IconCamera,
  },
  {
    name: 'два',
    icon: IconCopy,
  },
  {
    name: 'четыре',
    icon: IconFavorite,
  },
] as Item[];

const twoItems = [
  {
    name: 'один',
  },
  {
    name: 'два',
  },
] as Item[];

const knobs = (): Record<string, string | boolean> => ({
  multiply: boolean('multiply', false),
  size: select('size', ['xs', 's', 'm', 'l'], 'm'),
  view: select('view', ['primary', 'ghost', 'secondary'], 'primary'),
  form: select('form', ['default', 'round', 'brick'], 'default'),
});

storiesOf('ui/ChoiceGroup', module)
  .addDecorator(withKnobs)
  .add('Custom', () => {
    const [selectValue, setValue] = useState<Item[] | null>(null);
    const [onlyIconValue, setOnlyIconValue] = useState<Item[] | null>(null);
    const [twoItemsValue, setTwoItemsValue] = useState<Item[] | null>(null);

    return (
      <>
        <form className="decorator decorator_indent-b_m">
          <ChoiceGroup<Item>
            {...knobs()}
            items={items}
            value={selectValue}
            getItemKey={(item): string => item.name}
            getItemLabel={(item): string => item.name}
            onChange={({ value }): void => setValue(value)}
            getItemIcon={(item): React.FC<IIcon> | undefined => item.icon}
            name="ChoiceGroup"
          />
        </form>
        <form className="decorator decorator_indent-b_m">
          <ChoiceGroup<Item>
            {...knobs()}
            onlyIcon
            items={onlyIconItems}
            value={onlyIconValue}
            getItemKey={(item): string => item.name}
            getItemLabel={(item): string => item.name}
            onChange={({ value }): void => setOnlyIconValue(value)}
            getItemIcon={(item): React.FC<IIcon> | undefined => item.icon}
            name="ChoiceGroup2"
          />
        </form>
        <form className="decorator decorator_indent-b_m">
          <ChoiceGroup<Item>
            {...knobs()}
            items={twoItems}
            value={twoItemsValue}
            getItemKey={(item): string => item.name}
            getItemLabel={(item): string => item.name}
            onChange={({ value }): void => setTwoItemsValue(value)}
            getItemIcon={(item): React.FC<IIcon> | undefined => item.icon}
            name="ChoiceGroup"
          />
        </form>
      </>
    );
  });
