import { useCallback, useEffect } from 'react';

import { HandledEventsType, Handler, PossibleEvent } from './types';

type Params = {
  callback: Handler;
  key: string;
  keyevent?: HandledEventsType;
};

export const useKey = ({ callback, key, keyevent = 'keydown' }: Params): void => {
  const handleEvent = useCallback(
    (event: PossibleEvent): void => {
      console.log(event);
      if (event.key === key) {
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
