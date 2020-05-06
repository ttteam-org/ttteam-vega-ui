import React from 'react';
import { Button } from '@gpn-design/uikit/Button';
import { Text } from '@gpn-design/uikit/Text';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Modal } from './Modal';
import { useModal } from './use-modal';

import './Modal.css';

storiesOf('ui/Modal', module)
  .addDecorator(withKnobs)
  .add('Modal', () => {
    const { isOpen, close: handleClose } = useModal({ initialOpen: true });

    return (
      <Modal
        rootSelector="#modalRoot"
        hasOverlay
        hasCloseButton
        onClose={handleClose}
        isOpen={isOpen}
      >
        <Modal.Header>
          <Text size="xs">{text('children', 'Тестовая модалочка')}</Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            Тестовая модалка с очень очень очень очень очень очень очень очень очень очень очень
            очень очень очень очень очень очень очень очень очень очень очень очень очень очень
            очень очень очень очень очень очень очень очень очень большим текстом
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button size="m" view="primary" label="Кнопочка" />
        </Modal.Footer>
      </Modal>
    );
  });
