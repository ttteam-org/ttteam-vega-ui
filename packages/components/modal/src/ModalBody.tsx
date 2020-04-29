import React from 'react';
import { cn } from '@vega-ui/bem';

import { ModalNested } from './types/ModalNested';

import './Modal.css';

const cnModal = cn('VegaModal');

type ModalBodyProps = ModalNested;

export const ModalBody: React.FC<ModalBodyProps> = ({ children }) => (
  <div className={cnModal('Body')}>{children}</div>
);
