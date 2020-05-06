import React from 'react';
import { createPortal } from 'react-dom';
import { render, screen } from '@testing-library/react';

import { usePortalDomNode } from './use-portal-dom-node';

type Props = {
  rootSelector: string;
};

const SomeComponent: React.FC<Props> = ({ rootSelector }) => {
  const node = usePortalDomNode(rootSelector);

  if (!node) {
    return null;
  }

  return createPortal(<div data-testid="portal-component">test component</div>, node);
};

describe('usePortalDomNode хук', () => {
  test('компонент рендерится', () => {
    render(<SomeComponent rootSelector="body" />);
    expect(screen.getByTestId('portal-component')).toBeInTheDocument();
  });
});
