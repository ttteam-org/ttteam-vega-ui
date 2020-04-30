import React from 'react';

import { cnModal } from './helpers/cnModal';
import { ModalNested } from './types';

import './Modal.css';

type ModalFooterProps = ModalNested;

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, testId }) => (
  <footer data-testid={testId} className={cnModal('Footer').mix(className)}>
    {children}
  </footer>
);
