import React from 'react';

import { cnModal } from './helpers/cnModal';
import { ModalComponentProps } from './types/ModalComponentProps';

import './Modal.css';

type ModalBodyProps = ModalComponentProps;

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className, ...rest }) => (
  <div {...rest} className={cnModal('Body').mix(className)}>
    {children}
  </div>
);
