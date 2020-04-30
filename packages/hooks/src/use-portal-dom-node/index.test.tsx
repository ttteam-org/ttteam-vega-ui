import React from 'react';
import { createPortal } from 'react-dom';
import { render, screen } from '@testing-library/react';

import { usePortalDomNode } from '.';

type TestProps = {
  rootSelector: string;
};

const TestComponent: React.FC<TestProps> = ({ rootSelector }) => {
  const node = usePortalDomNode(rootSelector);

  if (!node) {
    return null;
  }

  return createPortal(<div data-testid="portal-component">test component</div>, node);
};

describe('usePortalDomNode хук', () => {
  test('компонент рендерится', () => {
    render(<TestComponent rootSelector="body" />);
    expect(screen.getByTestId('portal-component')).toBeInTheDocument();
  });
});
