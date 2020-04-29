import React from 'react';

import { cnModal } from './helpers/cnModal';
import { ModalNested } from './types/ModalNested';

import './Modal.css';

type ModalHeaderProps = ModalNested;

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className }) => (
  <header className={cnModal('Header', [className])}>{children}</header>
);
