import React from 'react';

import { cnModal } from './helpers/cnModal';
import { ModalComponentProps } from './types/ModalComponentProps';

import './Modal.css';

type ModalHeaderProps = ModalComponentProps;

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className, testId }) => (
  <header data-testid={testId} className={cnModal('Header').mix(className)}>
    {children}
  </header>
);
