import React from 'react';
import { cnTheme } from '@gpn-design/uikit/Theme';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { AppContainer, AppContainerManager } from '@vega-ui/app-container/src';
import { withPerformance } from 'storybook-addon-performance';
import { withThemes } from 'storybook-addon-themes';

import { getThemes } from './themes';
import { withMetadata } from './with-metadata';

import '@gpn-design/uikit/__internal__/src/components/Theme/Theme.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDisplay.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_font/theme_font_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/utils/whitepaper/whitepaper.css';

document.documentElement.lang = 'ru';

const themes = cnTheme({
  space: 'gpnDefault',
  size: 'gpnDefault',
  font: 'gpnDefault',
  control: 'gpnDefault',
});

const defaultClassName = `Theme ${themes} Theme_color_gpnDefault`;

document.body.className = defaultClassName;
document.body.style.margin = '0px';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modalRoot');
document.body.appendChild(modalRoot);

addParameters({ themes: getThemes() });
addDecorator(withMetadata);
addDecorator(withKnobs);
addDecorator(withPerformance);
const appContainerManager = new AppContainerManager('rootSelector', 'modalRoot');

appContainerManager.createPortalRoot({ className: defaultClassName });

const ThemeDecorator = ({
  children,
  theme = { class: 'Theme_color_gpnDefault' },
}): React.ReactElement => {
  const className = `Theme ${themes} ${theme.class}`;
  document.body.className = className;
  appContainerManager.updatePortalRootClassName(className);
  return <div className={className}>{children}</div>;
};

addParameters({
  themes: { list: getThemes(), Decorator: ThemeDecorator },
});

addDecorator(withKnobs);
addDecorator(withPerformance);
addDecorator((story) => {
  return story();
});

addDecorator((storyFn) => {
  window.document.documentElement.lang = 'ru';

  document.body.className = defaultClassName;

  return <div>{storyFn()}</div>;
});

addDecorator((story) => {
  const appStyles = {
    background: 'var(--color-bg-default)',
    padding: 'var(--space-3xl)',
    minHeight: '100vh',
  };

  return (
    <AppContainer appContainerManager={appContainerManager} style={appStyles}>
      {story()}
    </AppContainer>
  );
});

addDecorator(withThemes);

function loadStories(): void {
  const req = require.context('../packages', true, /.stories\.tsx$/);

  req.keys().forEach(req);
}

configure(loadStories, module);
