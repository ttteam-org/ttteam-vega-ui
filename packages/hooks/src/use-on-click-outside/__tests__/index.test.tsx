import React from 'react';
import { render, screen } from '@testing-library/react';

import { TestHookComponent } from './TestHookComponent';

const handleClickOutside = jest.fn();

beforeEach(() => {
  handleClickOutside.mockReset();
});

describe('use-on-click-outside hook', () => {
  test('коллбек не вызывается, если кликнули на элемент, который обернут в хук', () => {
    const eventsMap: Record<string, EventListener> = {};

    document.addEventListener = jest.fn((event, cb: EventListener) => {
      eventsMap[event] = cb;
    });
    render(<TestHookComponent onClickOutside={handleClickOutside} />);

    const div = screen.getByTestId('div-test-id');

    const event: MouseEvent = new MouseEvent('mousedown');

    eventsMap.mousedown({ ...event, target: div });

    expect(handleClickOutside).not.toBeCalled();
  });

  test('коллбек вызывается, если кликнули вне обернутого элемента', () => {
    const eventsMap: Record<string, EventListener> = {};

    document.addEventListener = jest.fn((event, cb: EventListener) => {
      eventsMap[event] = cb;
    });

    render(<TestHookComponent onClickOutside={handleClickOutside} />);

    const button = screen.getByTestId('button-test-id');

    const event: MouseEvent = new MouseEvent('mousedown');

    eventsMap.mousedown({ ...event, target: button });

    expect(handleClickOutside).toBeCalled();
  });
});
