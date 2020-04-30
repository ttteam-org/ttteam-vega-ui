import React from 'react';

import { cnModal } from './helpers/cnModal';
import { ModalNested } from './types/ModalNested';

import './Modal.css';

type ModalBodyProps = ModalNested;

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className, testId }) => (
  <div data-testid={testId} className={cnModal('Body').mix(className)}>
    {children}
  </div>
);
