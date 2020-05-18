declare module '*.css' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const classNames: any;
  export default classNames;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
