import React from 'react';
import { cn } from '@vega-ui/bem';

import { ModalNested } from './types';

import './Modal.css';

type ModalFooterProps = ModalNested;

const cnFooter = cn('VegaModal', 'Footer');

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => (
  <footer className={cnFooter({}, [className])}>{children}</footer>
);
