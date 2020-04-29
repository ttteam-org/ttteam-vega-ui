import React from 'react';

import { cnModal } from './helpers/cnModal';
import { ModalNested } from './types/ModalNested';

import './Modal.css';

type ModalFooterProps = ModalNested;

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {
  return <footer className={cnModal(`Footer ${className}`)}>{children}</footer>;
};
