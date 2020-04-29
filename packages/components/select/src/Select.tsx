import * as React from 'react';
import {
  CreatableSelect as BaseCreatableSelect,
  MultiSelect as BaseMultiSelect,
  Select as BaseSelect,
} from '@gpn-design/uikit/__internal__/src/components/Select';

type SelectProps = React.ComponentProps<typeof BaseSelect>;
type MultiSelectProps = React.ComponentProps<typeof BaseMultiSelect>;
type CreatableSelectProps = React.ComponentProps<typeof BaseCreatableSelect>;

export const Select: React.FC<SelectProps> = (props) => {
  return <BaseSelect {...props} />;
};

export const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  return <BaseMultiSelect {...props} />;
};

export const CreatableSelect: React.FC<CreatableSelectProps> = (props) => {
  return <BaseCreatableSelect {...props} />;
};
