import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withPropsTable } from 'storybook-addon-react-docgen'

addDecorator(withPropsTable)
addDecorator(withKnobs)

addDecorator(storyFn => {
  window.document.documentElement.lang = 'ru'
  return storyFn()
})

// automatically import all files ending in *.stories.tsx
const req = require.context('../packages', true, /.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)