import React from 'react';

import { cnModal } from './helpers/cn-modal';

import './Modal.css';

type ModalFooterProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['footer'];

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, ...rest }) => (
  <footer {...rest} className={cnModal('Footer').mix(className)}>
    {children}
  </footer>
);
