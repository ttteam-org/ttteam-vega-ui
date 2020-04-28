import * as React from 'react';
import { ChoiceGroup as BaseChoiceGroup } from '@gpn-design/uikit/ChoiceGroup';

type BaseChoiceGroupComponent = typeof BaseChoiceGroup;

export const ChoiceGroup: BaseChoiceGroupComponent = (props) => {
  return <BaseChoiceGroup {...props} />;
};
