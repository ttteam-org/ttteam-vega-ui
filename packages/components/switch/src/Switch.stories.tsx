import React, { useState } from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Switch } from './Switch';

const knobs = (): Record<string, string | boolean> => ({
  disabled: boolean('disabled', false),
  size: select('size', ['m', 'l'], 'm'),
  label: text('label', 'Move me, I beg you!'),
});

storiesOf('ui/Switch', module)
  .addDecorator(withKnobs)
  .addParameters({ metadata: { author: 'Дизайн-система ГПН', status: 'Approved' } })
  .add('Switch', () => {
    const [isChecked, setChecked] = useState<boolean>(false);

    const handleChange = ({ checked }: { checked: boolean }): void => {
      setChecked(checked);
    };

    return <Switch onChange={handleChange} checked={isChecked} {...knobs()} />;
  });
