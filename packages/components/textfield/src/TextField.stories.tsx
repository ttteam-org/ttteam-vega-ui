import React, { useRef, useState } from 'react';
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { IconPhoto } from '@vega-ui/icon';

import { TextField, TextFieldProps } from './TextField';

type AdditionalProps = {
  leftSideType: 'icon' | 'text' | 'false';
  leftSideText: string;
  rightSideType: 'icon' | 'text' | 'false';
  rightSideText: string;
  stateField: 'alert' | 'success' | 'warning' | '';
};

const knobs = (): TextFieldProps & AdditionalProps => ({
  width: select('width', ['full', 'default'], 'default'),
  form: select(
    'form',
    [
      'default',
      'brick',
      'round',
      'clearRound',
      'roundClear',
      'clearDefault',
      'defaultClear',
      'defaultBrick',
      'brickDefault',
      'brickClear',
      'clearBrick',
      'clearClear',
    ],
    'default',
  ),
  stateField: select('state', ['', 'alert', 'success', 'warning'], ''),
  size: select('size', ['xs', 's', 'm', 'l'], 'm'),
  view: select('view', ['default', 'clear'], 'default'),
  disabled: boolean('disabled', false),
  type: select(
    'type',
    [
      'text',
      'textarea',
      'color',
      'email',
      'number',
      'search',
      'tel',
      'date',
      'time',
      'datetime',
      'datetime-local',
      'url',
      'month',
      'week',
    ],
    'text',
  ),
  maxLength: number('maxLength', 200),
  minRows: number('minRows', 1),
  maxRows: number('maxRows', 5),
  placeholder: text('placeholder', 'My placeholder'),
  leftSideType: select('leftSideType', ['icon', 'text', 'false'], 'false'),
  leftSideText: text('leftSideText', 'from'),
  rightSideType: select('rightSideType', ['icon', 'text', 'false'], 'false'),
  rightSideText: text('rightSideText', 'm²'),
});

function Stories({
  width,
  form,
  size,
  view,
  type,
  maxLength,
  minRows,
  maxRows,
  stateField,
  placeholder,
  leftSideType,
  leftSideText,
  rightSideType,
  rightSideText,
  disabled,
}: TextFieldProps & AdditionalProps): React.ReactElement {
  const [inputValue, setValue] = useState<string | null | undefined>(undefined);
  const inputRef = useRef(null);
  const ref = useRef(null);
  // const innerRef = useRef(null);
  const leftSideSelect = {
    text: leftSideText,
    icon: IconPhoto,
    false: undefined,
  };

  const rightSideSelect = {
    text: rightSideText,
    icon: IconPhoto,
    false: undefined,
  };

  const leftSide = leftSideSelect[leftSideType];
  const rightSide = rightSideSelect[rightSideType];

  const handleChange = ({ value }: { value: string | null }): void => {
    setValue(value);
  };

  return (
    <TextField
      value={inputValue}
      width={width}
      form={form}
      state={stateField === '' ? undefined : stateField}
      size={size}
      view={view}
      type={type}
      maxLength={maxLength}
      minRows={minRows}
      maxRows={maxRows}
      placeholder={placeholder}
      onChange={handleChange}
      leftSide={leftSide}
      rightSide={rightSide}
      disabled={disabled}
      inputRef={inputRef}
      innerRef={ref}
    />
  );
}

storiesOf('ui/TextField', module)
  .addDecorator(withKnobs)
  .add('Текстовое поле ввода', () => {
    return <Stories {...knobs()} />;
  });
