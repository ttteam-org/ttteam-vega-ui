import * as React from 'react';
import { Informer as BaseInformer } from '@gpn-design/uikit/Informer';

type InformerProps = React.ComponentProps<typeof BaseInformer>;

export const Informer: React.FC<InformerProps> = (props) => {
  return <BaseInformer {...props} />;
};
