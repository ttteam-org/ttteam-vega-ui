import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';

import { PageBanner, PageBannerProps } from './PageBanner';

function renderComponent(props?: PageBannerProps): RenderResult {
  return render(<PageBanner {...props} />);
}

describe('PageBanner', () => {
  test('рендерится без ошибок', () => {
    renderComponent();
    // expect(banner).not.toThrow();
  });

  test('рендерится с заголовком', async () => {
    renderComponent({ title: 'Заголовок' });

    expect(screen.getByText('Заголовок')).toBeInTheDocument();
  });

  test('рендерится с описанием', async () => {
    renderComponent({ title: 'Описание' });

    expect(screen.getByText('Описание')).toBeInTheDocument();
  });

  test('рендерится с дополнительным классом', async () => {
    const { container } = renderComponent({ className: 'headClass' });
    expect(container.querySelector('.headClass')?.classList.contains('VegaPageBanner')).toBe(true);
  });
});
