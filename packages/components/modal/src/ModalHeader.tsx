import React from 'react';
import { block } from 'bem-cn';

import { ModalNested } from './types/ModalNested';

import './Modal.css';

const b = block('Modal');

type ModalHeaderProps = ModalNested;

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => (
  <header className={b('Header')}>{children}</header>
);
