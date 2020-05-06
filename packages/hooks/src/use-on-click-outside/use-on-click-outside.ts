import { RefObject, useEffect } from 'react';
import arePassiveEventsSupported from 'are-passive-events-supported';

import { usePreviousRef } from '../use-previous-ref';

const MOUSEDOWN = 'mousedown';
const TOUCHSTART = 'touchstart';
const CLICK = 'click';

type HandledEvents = [typeof MOUSEDOWN, typeof TOUCHSTART, typeof CLICK];

type HandledEventsType = HandledEvents[number];

type PossibleEvent = {
  [Type in HandledEventsType]: HTMLElementEventMap[Type];
}[HandledEventsType];

type Handler = (event: PossibleEvent) => void;

const events: HandledEvents = [MOUSEDOWN, TOUCHSTART, CLICK];

const getEventListenerOptions = (
  event: HandledEventsType,
): Record<string, boolean | string> | undefined => {
  if (event !== TOUCHSTART) {
    return undefined;
  }

  if (arePassiveEventsSupported()) {
    return { passive: true };
  }
  return {};
};

type Args = {
  ref: React.RefObject<HTMLElement>;
  handler: Handler;
};

export function useOnClickOutside({ ref, handler }: Args): void {
  const handlerRef: RefObject<Handler> = usePreviousRef<Handler>(handler);

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
      document.addEventListener(event, listener, getEventListenerOptions(event));
    });

    return (): void => {
      events.forEach((event) => {
        document.removeEventListener(
          event,
          listener,
          getEventListenerOptions(event) as EventListenerOptions,
        );
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handler]);
}
