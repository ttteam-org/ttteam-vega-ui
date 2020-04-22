export enum Theme {
  Dark = 'theme_color_gpn-dark',
  Default = 'theme_color_gpn-default',
  Display = 'theme_color_gpn-display'
};

type StorybookTheme = {
  name: string,
  class: Theme,
  color: string,
  default?: boolean
}

export const getStorybookThemes = (): StorybookTheme[] => [
  { name: 'Dark', class: Theme.Dark, color: '#00aced', default: true },
  { name: 'Default', class: Theme.Default, color: '#00aced' },
  { name: 'Display', class: Theme.Display, color: '#00aced' },
];