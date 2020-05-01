import { useCallback, useEffect } from 'react';

import { HandledEventsType, Handler, PossibleEvent } from './types';

type Opts = {
  keyevent?: HandledEventsType;
};

export const useKey = (
  key: string | number,
  callback: Handler,
  { keyevent = 'keydown' }: Opts = {},
): void => {
  const handleEvent = useCallback(
    (event: PossibleEvent): void => {
      if ([event.which, event.key, event.code].includes(key)) {
        callback(event);
      }
    },
    [callback, key],
  );

  useEffect(() => {
    document.addEventListener(keyevent, handleEvent);
    return (): void => {
      document.removeEventListener(keyevent, handleEvent);
    };
  }, [handleEvent, keyevent]);
};
