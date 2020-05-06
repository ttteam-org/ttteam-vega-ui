import React from 'react';

import { cnModal } from './helpers/cnModal';

import './Modal.css';

type ModalFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, ...rest }) => (
  <footer {...rest} className={cnModal('Footer').mix(className)}>
    {children}
  </footer>
);
