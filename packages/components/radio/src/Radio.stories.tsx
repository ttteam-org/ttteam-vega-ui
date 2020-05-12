import React, { useState } from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Radio } from './Radio';

const knobs = (): Record<string, string | boolean> => ({
  disabled: boolean('disabled', false),
  size: select('size', ['m', 'l'], 'm'),
  label: text('label', 'I am radio'),
});

storiesOf('ui/Radio', module)
  .addDecorator(withKnobs)
  .addParameters({ metadata: { author: 'Дизайн-система ГПН', status: 'Approved' } })
  .add('Радио кнопка', () => {
    const [isChecked, setChecked] = useState<boolean>(false);

    const handleChange = ({ checked }: { checked: boolean }): void => {
      setChecked(checked);
    };
    return <Radio onChange={handleChange} checked={isChecked} {...knobs()} />;
  });
