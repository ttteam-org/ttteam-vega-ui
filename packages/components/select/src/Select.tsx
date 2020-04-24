import * as React from 'react';
import {
  CreatableSelect as UICreatableSelect,
  MultiSelect as UIMultiSelect,
  Select as UISelect,
} from '@gpn-design/uikit/__internal__/src/components/Select';

type SelectProps = React.ComponentProps<typeof UISelect>;
type MultiSelectProps = React.ComponentProps<typeof UIMultiSelect>;
type CreatableSelectProps = React.ComponentProps<typeof UICreatableSelect>;

export const Select: React.FC<SelectProps> = (props) => {
  return <UISelect {...props} />;
};

export const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  return <UIMultiSelect {...props} />;
};

export const CreatableSelect: React.FC<CreatableSelectProps> = (props) => {
  return <UICreatableSelect {...props} />;
};
