import * as React from 'react';
import { ChoiceGroup as UIChoiceGroup } from '@gpn-design/uikit/ChoiceGroup';

type UIChoiceGroupComponent = typeof UIChoiceGroup;

export const ChoiceGroup: UIChoiceGroupComponent = (props) => {
  return <UIChoiceGroup {...props} />;
};
