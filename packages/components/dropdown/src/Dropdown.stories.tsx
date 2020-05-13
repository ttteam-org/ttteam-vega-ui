import React from 'react';
import { Button } from '@gpn-design/uikit/Button';
import { Text } from '@gpn-design/uikit/Text';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { useDropdown } from './use-dropdown';

const DropdownMenu: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const firstItem = text('Текст первого элемента', 'First');
  const secondItem = text('Текст второго элемента', 'Second');

  const alignItem = select(
    'Расположение элементов',
    { Start: 'start', Center: 'center', End: 'end' },
    'start',
  );
  return (
    <Dropdown.Menu>
      <Dropdown.Item align={alignItem} isActive onClick={onClick}>
        <Text>{firstItem}</Text>
      </Dropdown.Item>
      <Dropdown.Item align={alignItem} onClick={onClick}>
        <Text>{secondItem}</Text>
      </Dropdown.Item>
    </Dropdown.Menu>
  );
};

storiesOf('ui/Dropdown', module)
  .addDecorator(withKnobs)
  .add('Рендер без портала', () => {
    const { isOpen, close: handleClose, toggle: toggleDropdownOpen } = useDropdown();

    const triggerNode = <Button label="Click Me" onClick={toggleDropdownOpen} />;

    return (
      <Dropdown isOpen={isOpen} trigger={triggerNode} onClose={handleClose}>
        <DropdownMenu onClick={handleClose} />
      </Dropdown>
    );
  })
  .add('Рендер в портале', () => {
    const { isOpen, close: handleClose, toggle: toggleDropdownOpen } = useDropdown();

    return (
      <>
        <Dropdown.Trigger id="trigger">
          <Button label="Click Me" onClick={toggleDropdownOpen} />
        </Dropdown.Trigger>
        <Dropdown portalId="trigger" portal isOpen={isOpen} onClose={handleClose}>
          <DropdownMenu onClick={handleClose} />
        </Dropdown>
      </>
    );
  });
