import React from 'react';
import { Button } from '@gpn-design/uikit/Button';
import { Text } from '@gpn-design/uikit/Text';
import { storiesOf } from '@storybook/react';

import { Modal } from './Modal';
import { useModal } from './use-modal';

import './Modal.css';

storiesOf('ui/Modal', module).add('Modal', () => {
  const { isOpen, handleClose } = useModal({ initialOpen: true });

  return (
    <Modal
      rootSelector="#root"
      hasOverlay
      hasCloseButton
      closeByEsc
      onClose={handleClose}
      isOpen={isOpen}
    >
      <Modal.Header>
        <Text size="xs">Тестовая модалочка</Text>
      </Modal.Header>
      <Modal.Body>
        <Text>модалка модалка модалка</Text>
      </Modal.Body>
      <Modal.Footer>
        <Button size="m" view="primary" label="Кнопочка" />
      </Modal.Footer>
    </Modal>
  );
});
