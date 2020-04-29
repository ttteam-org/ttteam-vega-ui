import * as React from 'react';

export const usePortalDomNode = (
  rootSelector: string,
  className?: string,
): HTMLDivElement | null => {
  const [rootNode, setRootNode] = React.useState<HTMLDivElement | null>(null);
  const selector: HTMLElement = document.querySelector(rootSelector) as HTMLElement;

  React.useEffect(() => {
    const rootElement = document.createElement('div');

    if (className) {
      rootElement.setAttribute('class', className);
    }

    setRootNode(rootElement);

    selector.appendChild(rootElement);

    return (): void => {
      selector.removeChild(rootElement);
    };
  }, [selector, className]);

  return rootNode;
};
