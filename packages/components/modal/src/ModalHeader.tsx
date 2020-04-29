import React from 'react';
import { block } from 'bem-cn';

import './Modal.css';

const b = block('modal');

type ModalHeaderProps = {
  children: React.ReactNode;
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => (
  <header className={b('header')}>{children}</header>
);
