import React from 'react';
import { cn } from '@vega-ui/bem';

import { ModalNested } from './types';

import './Modal.css';

type ModalHeaderProps = ModalNested;

const cnHeader = cn('VegaModal', 'Header');

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className }) => (
  <header className={cnHeader({}, [className])}>{children}</header>
);
