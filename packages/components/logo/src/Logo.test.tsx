import React from 'react';
import * as tl from '@testing-library/react';

import { Logo } from './Logo';

type renderProps = Partial<React.ComponentProps<typeof Logo>>;

function renderComponent(props: renderProps): tl.RenderResult {
  return tl.render(<Logo {...props} />);
}

describe('Logo', () => {
  test('рендерится без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
