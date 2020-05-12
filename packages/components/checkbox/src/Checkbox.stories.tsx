import React, { useState } from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Checkbox } from './Checkbox';

const knobs = (): Record<string, string | boolean> => ({
  disabled: boolean('disabled', false),
  intermediate: boolean('intermediate', false),
  size: select('size', ['m', 'l'], 'm'),
  label: text('label', 'Check me'),
});

storiesOf('ui/Checkbox', module)
  .addDecorator(withKnobs)
  .addParameters({ metadata: { author: 'Дизайн-система ГПН', status: 'Approved' } })
  .add('Чекбокс', () => {
    const [isChecked, setChecked] = useState<boolean>(false);

    const handleChange = ({ checked }: { checked: boolean }): void => {
      setChecked(checked);
    };

    return <Checkbox onChange={handleChange} checked={isChecked} {...knobs()} />;
  });
