import React from 'react';
import { createPortal } from 'react-dom';
// todo: заменить на нашу иконку после мержа
import { IconClose } from '@gpn-design/uikit/IconClose';
import { Button } from '@vega-ui/button';
import { usePortalDomNode } from '@vega-ui/hooks';
import { block } from 'bem-cn';

import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

import './Modal.css';

export const b = block('modal');

type ModalProps = {
  onClose?: (e: React.SyntheticEvent) => void;
  isOpen: boolean;
  hasCloseButton?: boolean;
  children: React.ReactNode;
  hasOverlay?: boolean;
  onOverlayClick?: (e: React.SyntheticEvent) => void;
  rootSelector?: string;
};

type IModal<T> = React.FC<T> & {
  Header: typeof ModalHeader;
  Footer: typeof ModalFooter;
};

export const Modal: IModal<ModalProps> = (props) => {
  const { hasCloseButton, onClose, children, isOpen } = props;
  const rootSelector: string = props.rootSelector || 'body';
  const portal: HTMLDivElement = usePortalDomNode(rootSelector) as HTMLDivElement;

  return isOpen
    ? createPortal(
        <div className={b()}>
          {hasCloseButton && (
            <Button
              onClick={onClose}
              className={b('close-button')}
              type="button"
              size="xs"
              view="ghost"
              onlyIcon
              iconLeft={IconClose}
              iconSize="xs"
            />
          )}
          {children}
        </div>,
        portal,
      )
    : null;
};

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
