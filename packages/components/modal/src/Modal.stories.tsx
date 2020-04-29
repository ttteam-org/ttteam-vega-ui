import React, { useState } from 'react';
import { Button } from '@gpn-design/uikit/Button';
import { Text } from '@gpn-design/uikit/Text';
import { storiesOf } from '@storybook/react';

import { Modal } from './Modal';

import './Modal.css';

storiesOf('ui/Modal', module).add('Modal', () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);

  return (
    <Modal
      rootSelector="#root"
      hasCloseButton
      hasOverlay
      onClose={(): void => setIsOpenModal(true)}
      isOpen={isOpenModal}
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
