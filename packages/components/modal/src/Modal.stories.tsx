import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@gpn-design/uikit/Button';
import { Text } from '@gpn-design/uikit/Text';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Modal } from './Modal';
import { useModal } from './use-modal';

import './Modal.css';

const ButtonContainer = styled.div<{ align: string }>(
  {
    display: 'flex',
  },
  (props) => ({
    justifyContent: props.align,
  }),
);

storiesOf('ui/Modal', module)
  .addDecorator(withKnobs)
  .addParameters({ metadata: { author: 'CSSSR', status: 'Approved' } })
  .add('Базовая модалка', () => {
    const { isOpen, close: handleClose, open: handleOpen } = useModal({ initialOpen: true });

    const buttonAlign = select(
      'Расположение кнопки в футере',
      { start: 'flex-start', center: 'center', end: 'flex-end' },
      'flex-end',
    );

    const headerChildren = text('Текст в хедере', 'Тестовая модалочка');
    const bodyChildren = text(
      'Текст в теле модалки',
      `Тестовая модалка с ${'очень '.repeat(20)} большим текстом`,
    );

    return (
      <>
        {!isOpen && <Button onClick={handleOpen} size="m" view="primary" label="Открыть модалку" />}
        <Modal
          rootSelector="#modalRoot"
          hasOverlay
          hasCloseButton
          onClose={handleClose}
          isOpen={isOpen}
        >
          <Modal.Header>
            <Text size="xs">{headerChildren}</Text>
          </Modal.Header>
          <Modal.Body>
            <Text>{bodyChildren}</Text>
          </Modal.Body>
          <Modal.Footer>
            <ButtonContainer align={buttonAlign}>
              <Button size="m" view="primary" label="Кнопочка" />
            </ButtonContainer>
          </Modal.Footer>
        </Modal>
      </>
    );
  });
