import React from 'react';
import { render } from '@testing-library/react';

import { useKey } from '.';

type TestProps = {
  onKeyClick: (e: KeyboardEvent) => void;
};

const TestComponent: React.FC<TestProps> = ({ onKeyClick }) => {
  useKey({ callback: onKeyClick, key: 'Enter' });
  return <div>test component</div>;
};

describe('useKey хук', () => {
  test('callback вызывается, если кликнули на Enter', () => {
    const eventsMap: Record<string, EventListener> = {};
    const onKeyClick = jest.fn();

    document.addEventListener = jest.fn((event, cb: EventListener) => {
      eventsMap[event] = cb;
    });

    render(<TestComponent onKeyClick={onKeyClick} />);

    const enterEvent = new KeyboardEvent('keydown', {
      bubbles: true,
      key: 'Enter',
      code: 'Enter',
    });

    eventsMap.keydown(enterEvent);

    expect(onKeyClick).toBeCalled();
  });
});
