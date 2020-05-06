const isBrowser = typeof window === 'undefined';

export const arePassiveEventsSupported = (): boolean => isBrowser;
