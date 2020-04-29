import React, { RefObject, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@vega-ui/bem';
import { useOnClickOutside, usePortalDomNode } from '@vega-ui/hooks';
import { IconClose } from '@vega-ui/icons';

import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

import './Modal.css';

type ModalProps = {
  onClose: React.EventHandler<React.MouseEvent>;
  isOpen: boolean;
  hasCloseButton?: boolean;
  children: React.ReactNode;
  hasOverlay?: boolean;
  onOverlayClick?: (e: React.SyntheticEvent) => void;
  rootSelector?: string;
  className?: string;
};

type IModal<T> = React.FC<T> & {
  Header: typeof ModalHeader;
  Footer: typeof ModalFooter;
  Body: typeof ModalBody;
};

const cnModal = cn('Modal');

export const Modal: IModal<ModalProps> = (props) => {
  const { hasCloseButton, onClose, children, isOpen, hasOverlay, className } = props;
  const rootSelector: string = props.rootSelector || 'body';
  const portal: HTMLDivElement = usePortalDomNode(rootSelector) as HTMLDivElement;
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const onOverlayClick = props.onOverlayClick || onClose;

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
        <>
          <div ref={ref} className={cnModal({}, [className])}>
            {hasCloseButton && (
              <button type="button" onClick={onClose} className={cnModal('CloseButton')}>
                <IconClose size="s" />
              </button>
            )}
            {children}
          </div>
          {hasOverlay && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button type="button" onClick={onOverlayClick} className={cnModal('Overlay')} />
          )}
        </>,
        portal,
      )
    : null;
};

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
