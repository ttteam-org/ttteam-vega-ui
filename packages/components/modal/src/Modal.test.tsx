import React from 'react';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';

import { Modal, ModalProps } from './Modal';

function renderComponent(props: ModalProps): RenderResult {
  return render(<Modal onClose={props.onClose} testId="Modal" isOpen {...props} />);
}

describe('Modal', () => {
  test('рендерится без ошибок', () => {
    renderComponent({ onClose: jest.fn() });
  });

  describe('Закрытие по кнопке', () => {
    test('закрывается по esc', () => {
      const onClose = jest.fn();
      renderComponent({ onClose });

      const escEvent = new KeyboardEvent('keydown', {
        bubbles: true,
        key: 'Escape',
        code: 'Escape',
      });

      document.dispatchEvent(escEvent);

      expect(onClose).toBeCalled();
    });
  });

  describe('Кнопка закрытия', () => {
    test('рендерится кнопка, если передать hasCloseButton', () => {
      renderComponent({ onClose: jest.fn(), hasCloseButton: true });

      const closeButton = screen.getByTestId('Modal:closeButton');

      expect(closeButton).toBeInTheDocument();
    });

    test('по клику на кнопку вызывается onClose', () => {
      const onClose = jest.fn();

      renderComponent({ onClose, hasCloseButton: true });

      const closeButton = screen.getByTestId('Modal:closeButton');

      fireEvent.click(closeButton);

      expect(onClose).toBeCalled();
    });
  });

  describe('Оверлей', () => {
    test('рендерится оверлей, если передать hasOverlay', () => {
      renderComponent({ onClose: jest.fn(), hasOverlay: true });

      const overlay = screen.getByTestId('Modal:overlay');

      expect(overlay).toBeInTheDocument();
    });

    test('можно прокинуть onOverlayClick', () => {
      const onOverlayClick = jest.fn();
      renderComponent({ onClose: jest.fn(), hasOverlay: true, onOverlayClick });

      const overlay = screen.getByTestId('Modal:overlay');

      fireEvent.click(overlay);

      expect(onOverlayClick).toBeCalled();
    });
  });

  describe('ModalHeader', () => {
    test('прокидывается className', () => {
      render(
        <Modal.Header className="custom-header" testId="modal-header">
          test
        </Modal.Header>,
      );

      const header = screen.getByTestId('modal-header');

      expect(header.classList.contains('custom-header')).toBe(true);
    });
  });

  describe('ModalBody', () => {
    test('прокидывается className', () => {
      render(
        <Modal.Body className="custom-body" testId="modal-body">
          test
        </Modal.Body>,
      );

      const header = screen.getByTestId('modal-body');

      expect(header.classList.contains('custom-body')).toBe(true);
    });
  });

  describe('ModalFooter', () => {
    test('прокидывается className', () => {
      render(
        <Modal.Body className="custom-footer" testId="modal-footer">
          test
        </Modal.Body>,
      );

      const header = screen.getByTestId('modal-footer');

      expect(header.classList.contains('custom-footer')).toBe(true);
    });
  });
});
