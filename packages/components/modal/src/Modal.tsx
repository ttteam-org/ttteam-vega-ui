import React, { RefObject, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
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
  closeByEsc?: boolean;
};

const testID: Record<string, string> = {
  root: 'Modal:root',
  closeButton: 'Modal:closeButton',
  overlay: 'Modal:overlay',
};

type TypeModal<T> = React.FC<T> & {
  Header: typeof ModalHeader;
  Footer: typeof ModalFooter;
  Body: typeof ModalBody;
  TestID: typeof testID;
};

const ESCAPE_CODE = 'Escape';

export const Modal: TypeModal<ModalProps> = (props) => {
  const { hasCloseButton, onClose, children, isOpen, hasOverlay, closeByEsc } = props;
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

  const onCloseByEsc = useCallback(
    (e: KeyboardEvent | React.KeyboardEvent) => {
      if (closeByEsc) {
        const event = e as React.KeyboardEvent;
        onClose(event);
      }
    },
    [onClose, closeByEsc],
  );

  useKey({ callback: onCloseByEsc, key: ESCAPE_CODE });

  if (!portal) {
    return null;
  }

  return isOpen
    ? createPortal(
        <>
          <div
            data-testid={testID.root}
            aria-modal="true"
            role="dialog"
            ref={ref}
            className={cnModal()}
          >
            {hasCloseButton && (
              <button
                data-testid={testID.closeButton}
                type="button"
                aria-label="Кнопка закрытия модального окна"
                onClick={onClose}
                className={cnModal('CloseButton')}
              >
                <IconClose size="s" />
              </button>
            )}
            {children}
          </div>
          {hasOverlay && (
            <button
              data-testid={testID.overlay}
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
Modal.TestID = testID;
