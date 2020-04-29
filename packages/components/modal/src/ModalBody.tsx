import React from 'react';

import { cnModal } from './helpers/cnModal';
import { ModalNested } from './types/ModalNested';

import './Modal.css';

type ModalBodyProps = ModalNested;

export const ModalBody: React.FC<ModalBodyProps> = ({ children }) => (
  <div className={cnModal('Body')}>{children}</div>
);
