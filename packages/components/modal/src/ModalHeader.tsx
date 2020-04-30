import React from 'react';

import { cnModal } from './helpers/cnModal';
import { ModalNested } from './types';

import './Modal.css';

type ModalHeaderProps = ModalNested;

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className, testId }) => (
  <header data-testid={testId} className={cnModal('Header').mix(className)}>
    {children}
  </header>
);
