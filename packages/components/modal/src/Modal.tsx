import React, { RefObject, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@vega-ui/button';
import { useKey, useOnClickOutside, usePortalDomNode } from '@vega-ui/hooks';
import { IconClose } from '@vega-ui/icons';

import { cnModal } from './helpers/cnModal';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

import './Modal.css';

export type ModalProps = {
  onClose: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  isOpen?: boolean;
  hasCloseButton?: boolean;
  children?: React.ReactNode;
  hasOverlay?: boolean;
  onOverlayClick?: (e: React.SyntheticEvent) => void;
  rootSelector?: string;
  className?: string;
};

type TypeModal<T> = React.FC<T> & {
  Header: typeof ModalHeader;
  Footer: typeof ModalFooter;
  Body: typeof ModalBody;
} & Omit<React.HTMLAttributes<HTMLDivElement>, keyof T>;

const ESCAPE_CODE = 'Escape';

type VegaKeyboardEvent = KeyboardEvent | React.KeyboardEvent;
type VegaMouseEvent = MouseEvent | TouchEvent | React.MouseEvent;

export const Modal: TypeModal<ModalProps> = (props) => {
  const {
    hasCloseButton,
    onClose,
    children,
    onOverlayClick: handleOverlayClick,
    isOpen,
    hasOverlay,
    className,
    ...rest
  } = props;
  const rootSelector: string = props.rootSelector || 'body';
  const portal: Element | null = usePortalDomNode(rootSelector) as HTMLDivElement;
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const onOverlayClick = handleOverlayClick ?? onClose;

  const onClickOutside = useCallback(
    (e: VegaMouseEvent): void => {
      const event = e as React.MouseEvent;
      onClose(event);
    },
    [onClose],
  );

  useOnClickOutside({ ref, handler: onClickOutside });

  const onCloseByEsc = useCallback(
    (e: VegaKeyboardEvent) => {
      const event = e as React.KeyboardEvent;
      onClose(event);
    },
    [onClose],
  );

  useKey(ESCAPE_CODE, onCloseByEsc, { keyevent: 'keydown' });

  if (!portal) {
    return null;
  }

  return isOpen
    ? createPortal(
        <>
          <div
            {...rest}
            aria-modal="true"
            role="dialog"
            ref={ref}
            className={cnModal('Root').mix(className)}
          >
            {hasCloseButton && (
              <Button
                aria-label="Кнопка закрытия модального окна"
                className={cnModal('CloseButton').toString()}
                type="button"
                view="ghost"
                onClick={onClose}
                onlyIcon
                iconLeft={IconClose}
                iconSize="s"
              />
            )}
            {children}
          </div>
          {hasOverlay && (
            <button
              aria-label="Оверлей модального окна"
              type="button"
              onClick={onOverlayClick}
              className={cnModal('Overlay')}
            />
          )}
        </>,
        portal,
      )
    : null;
};

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
