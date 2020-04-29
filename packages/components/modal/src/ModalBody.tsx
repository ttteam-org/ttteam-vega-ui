import React from 'react';

import { cnModal } from './helpers/cnModal';
import { ModalNested } from './types/ModalNested';

import './Modal.css';

type ModalBodyProps = ModalNested;

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => (
  <div className={cnModal('Body', [className])}>{children}</div>
);
