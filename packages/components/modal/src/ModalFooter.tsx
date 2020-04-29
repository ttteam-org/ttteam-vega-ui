import React from 'react';
import { block } from 'bem-cn';

import './Modal.css';

const b = block('modal');

type ModalFooterProps = {
  children: React.ReactNode;
};

export const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => (
  <footer className={b('footer')}>{children}</footer>
);
