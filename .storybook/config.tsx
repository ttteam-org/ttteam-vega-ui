import * as React from 'react';
import { addDecorator, configure, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { withPerformance } from 'storybook-addon-performance';
import { withThemes } from 'storybook-addon-themes';

import { getStorybookThemes } from '@vega-ui/utils/theme';

import { cnTheme } from '@gpn-design/uikit/Theme';

import '@gpn-design/uikit/__internal__/src/components/Theme/Theme.css' 
import '@gpn-design/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css' 
import '@gpn-design/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css' 
import '@gpn-design/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css' 
import '@gpn-design/uikit/__internal__/src/components/Theme/_font/theme_font_gpnDefault.css' 
import '@gpn-design/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/utils/whitepaper/whitepaper.css';



addParameters({
  themes: getStorybookThemes(),
});


addDecorator(withPropsTable);
addDecorator(withKnobs);
addDecorator(withPerformance);
addDecorator(withThemes);
addDecorator(storyFn => {
  window.document.documentElement.lang = 'ru'

  const classes = cnTheme({
    color: 'gpnDefault', space: 'gpnDefault', size: 'gpnDefault', font: 'gpnDefault', control: 'gpnDefault'
  })
  
  document.body.className = classes;
  
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