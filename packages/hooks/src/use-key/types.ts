export const KEYDOWN = 'keydown';
export const KEYUP = 'keyup';
export const KEYPRESS = 'keypress';

export type HandledEvents = [typeof KEYDOWN, typeof KEYUP, typeof KEYPRESS];

export type HandledEventsType = HandledEvents[number];

export type PossibleEvent = {
  [Type in HandledEventsType]: HTMLElementEventMap[Type];
}[HandledEventsType];

export type Handler = (e: PossibleEvent) => void;
