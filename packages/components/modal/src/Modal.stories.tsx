import React, { useState } from 'react';
import { Text } from '@gpn-design/uikit/Text';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Modal } from './Modal';

const defaultKnobs = (): Record<string, string> => ({
  url: text('url', 'https://pbs.twimg.com/profile_images/896978374232600577/v2xEJoxM_400x400.jpg'),
  size: select('size', ['s', 'm'], 'm'),
  form: select('form', ['round', 'brick', 'default'], 'round'),
});

storiesOf('ui/Modal', module)
  .addDecorator(withKnobs)
  .add('Modal', () => {
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
          <Text size="xs">Тестовая модалка</Text>
        </Modal.Header>
        <Modal.Body>
          <Text>модалка модалка модалка</Text>
        </Modal.Body>
      </Modal>
    );
  });
