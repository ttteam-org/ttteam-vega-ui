import React, { RefObject, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@vega-ui/button';
import { useOnClickOutside, usePortalDomNode } from '@vega-ui/hooks';
import { IconClose } from '@vega-ui/icons';
import { block } from 'bem-cn';

import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

import './Modal.css';

export const b = block('modal');

type ModalProps = {
  onClose: React.EventHandler<React.MouseEvent>;
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
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const onClickOutside = useCallback(
    (e: MouseEvent | TouchEvent | React.MouseEvent): void => {
      const event = e as React.MouseEvent;
      onClose(event);
    },
    [onClose],
  );

  useOnClickOutside({ ref, handler: onClickOutside });

  if (!portal) {
    return null;
  }

  return isOpen
    ? createPortal(
        <div ref={ref} className={b()}>
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
