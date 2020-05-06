import React from 'react';

import { cnModal } from './helpers/cnModal';
import { ModalComponentProps } from './types/ModalComponentProps';

import './Modal.css';

type ModalFooterProps = ModalComponentProps;

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, ...rest }) => (
  <footer {...rest} className={cnModal('Footer').mix(className)}>
    {children}
  </footer>
);
