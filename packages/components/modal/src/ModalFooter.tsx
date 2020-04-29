import React from 'react';
import { block } from 'bem-cn';

import { cnModal } from './helpers/cnModal';

import './Modal.css';

type ModalFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => (
  <footer className={cnModal('Footer', [className])}>{children}</footer>
);
