import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { withPerformance } from 'storybook-addon-performance';

import '@gpn-design/uikit/dist/style.css';

addDecorator(withPropsTable);
addDecorator(withKnobs);
addDecorator(withPerformance);

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
    'theme_color_gpn-display',
  )
  
  return storyFn()
})

const req = require.context('../packages', true, /.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)