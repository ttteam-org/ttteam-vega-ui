import React from 'react';

const isServer = typeof window === 'undefined';

export const useIsomorphicEffect = isServer ? React.useEffect : React.useLayoutEffect;

type OptionalElement = Element | null;

function getParentNode(selector: string): OptionalElement {
  const isIDSelector = selector[0] === '#';
  const parentNode = isIDSelector
    ? document.getElementById(selector.substr(1))
    : document.querySelector(selector);

  return parentNode;
}

export const usePortalDomNode = (parentSelector = 'body', className?: string): OptionalElement => {
  const ref = React.useRef<Element | null>(null);

  if (ref.current === null) {
    ref.current = document.createElement('div');
  }

  useIsomorphicEffect(() => {
    if (className !== undefined && ref.current) {
      ref.current.setAttribute('class', className);
    }
  }, [className]);

  useIsomorphicEffect(() => {
    const parent = getParentNode(parentSelector);

    if (ref.current && parent) {
      parent.appendChild(ref.current);
    }

    return (): void => {
      if (ref.current && parent) {
        parent.removeChild(ref.current);
      }
    };
  }, [parentSelector]);

  return ref.current;
};
