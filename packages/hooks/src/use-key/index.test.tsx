import React from 'react';
import { render } from '@testing-library/react';

import { useKey } from '.';

type TestProps = {
  onKeyClick: (e: KeyboardEvent) => void;
  keyevent: 'keyup' | 'keydown' | 'keypress';
};

const TestComponent: React.FC<TestProps> = ({ onKeyClick, keyevent = 'keyup' }) => {
  useKey({ callback: onKeyClick, key: 'Enter', keyevent });
  return <div>test component</div>;
};

describe('useKey хук', () => {
  test('callback вызывается, если кликнули на Enter', () => {
    const eventsMap: Record<string, EventListener> = {};
    const onKeyClick = jest.fn();

    document.addEventListener = jest.fn((event, cb: EventListener) => {
      eventsMap[event] = cb;
    });

    const { rerender } = render(<TestComponent keyevent="keydown" onKeyClick={onKeyClick} />);

    const enterEvent = new KeyboardEvent('keydown', {
      bubbles: true,
      key: 'Enter',
      code: 'Enter',
    });

    eventsMap.keydown(enterEvent);

    expect(onKeyClick).toBeCalled();

    onKeyClick.mockReset();

    rerender(<TestComponent keyevent="keyup" onKeyClick={onKeyClick} />);

    eventsMap.keyup(
      new KeyboardEvent('keyup', {
        bubbles: true,
        key: 'Enter',
        code: 'Enter',
      }),
    );

    expect(onKeyClick).toBeCalled();
  });
});
