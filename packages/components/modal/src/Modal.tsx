import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@ttteam-org/vega-button';
import {
  PossibleCloseEvent as CloseEvent,
  usePortalDomNode,
  useRootClose,
} from '@ttteam-org/vega-hooks';
import { IconClose } from '@ttteam-org/vega-icons';

import { cnModal } from './helpers/cn-modal';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

import './Modal.css';

type DivProps = JSX.IntrinsicElements['div'];

type PossibleCloseEvent = CloseEvent | React.SyntheticEvent;

export type ModalProps = {
  onClose: (e: PossibleCloseEvent) => void;
  isOpen?: boolean;
  hasCloseButton?: boolean;
  children?: React.ReactNode;
  hasOverlay?: boolean;
  onOverlayClick?: React.EventHandler<React.MouseEvent>;
  rootSelector?: string;
  className?: string;
};

interface Modal<T> extends React.FC<T>, DivProps {
  Header: typeof ModalHeader;
  Footer: typeof ModalFooter;
  Body: typeof ModalBody;
}

export const Modal: Modal<ModalProps> = (props) => {
  const {
    hasCloseButton,
    onClose,
    children,
    onOverlayClick,
    isOpen,
    hasOverlay,
    className,
    ...rest
  } = props;
  const rootSelector: string = props.rootSelector || 'body';
  const portal = usePortalDomNode(rootSelector);
  const ref = useRef<HTMLDivElement | null>(null);

  const onCloseModal = (e: PossibleCloseEvent): void => {
    if (isOpen) {
      onClose(e);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent): void => {
    if (onOverlayClick) {
      onOverlayClick(e);
    }
  };

  useRootClose(ref, onCloseModal);

  if (!portal || !isOpen) {
    return null;
  }

  return createPortal(
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
            onClick={onCloseModal}
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
          onClick={handleOverlayClick}
          className={cnModal('Overlay')}
        />
      )}
    </>,
    portal,
  );
};

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
