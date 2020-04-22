import * as React from 'react';
import { addDecorator, configure, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { withPerformance } from 'storybook-addon-performance';
import { withThemes } from 'storybook-addon-themes';

import { getStorybookThemes } from '@vega-ui/utils/theme';

import '@gpn-design/uikit/dist/style.css';


addParameters({
  themes: getStorybookThemes(),
});


addDecorator(withPropsTable);
addDecorator(withKnobs);
addDecorator(withPerformance);
addDecorator(withThemes);
addDecorator(storyFn => {
  window.document.documentElement.lang = 'ru'
  
  document.body.classList.add(
    'theme',
    'theme_breakpoint_default',
    'theme_control_gpn-default',
    'theme_font_default',
    'theme_gap_small',
    'theme_size_gpn-default',
    'theme_space_gpn-default',
    'theme_color_gpn-dark',
  )
  
  return storyFn()
})


addDecorator((story) => {
  const appStyles = {
    background: 'var(--color-bg-default)',
    padding: 'var(--space-3xl)',
    minHeight: '100vh',
  };

  return (
    <div id="app" style={appStyles}>
      {story()}
    </div>
  );
});

const req = require.context('../packages', true, /.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)