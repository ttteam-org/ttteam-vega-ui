import React from 'react';

import { cnModal } from './helpers/cnModal';

import './Modal.css';

type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className, ...rest }) => (
  <div {...rest} className={cnModal('Body').mix(className)}>
    {children}
  </div>
);
