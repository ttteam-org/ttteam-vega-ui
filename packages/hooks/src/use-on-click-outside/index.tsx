import { RefObject, useEffect } from 'react';
import arePassiveEventsSupported from 'are-passive-events-supported';

import { useLatest } from '../use-latest';

const MOUSEDOWN = 'mousedown';
const TOUCHSTART = 'touchstart';

type HandledEvents = [typeof MOUSEDOWN, typeof TOUCHSTART];

type HandledEventsType = HandledEvents[number];

type PossibleEvent = {
  [Type in HandledEventsType]: HTMLElementEventMap[Type];
}[HandledEventsType];

type Handler = (event: PossibleEvent) => void;

const events: HandledEvents = [MOUSEDOWN, TOUCHSTART];

const getOptions = (event: HandledEventsType): Record<string, boolean | string> | undefined => {
  if (event !== TOUCHSTART) {
    return undefined;
  }

  if (arePassiveEventsSupported()) {
    return { passive: true };
  }
  return {};
};

export function useOnClickOutside(ref: React.RefObject<HTMLElement>, handler: Handler): void {
  const handlerRef: RefObject<Handler> = useLatest<Handler>(handler);

  useEffect(() => {
    // eslint-disable-next-line consistent-return
    function listener(event: PossibleEvent): void {
      if (handlerRef && handlerRef.current) {
        if (!ref.current || !handlerRef.current || ref.current.contains(event.target as Node)) {
          return undefined;
        }

        handlerRef.current(event);
      }
    }
    
    events.forEach((event) => {
      document.addEventListener(event, listener, getOptions(event));
    });
    
    return (): void => {
      events.forEach((event) => {
        document.removeEventListener(event, listener, getOptions(event) as EventListenerOptions);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handler]);
}
