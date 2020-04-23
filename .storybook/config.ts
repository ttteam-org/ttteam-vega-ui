import { addDecorator, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withPropsTable } from "storybook-addon-react-docgen";
import { withPerformance } from "storybook-addon-performance";

addDecorator(withPropsTable);
addDecorator(withKnobs);
addDecorator(withPerformance);

addDecorator((storyFn) => {
  window.document.documentElement.lang = "ru";

  return storyFn();
});

const req = require.context("../packages", true, /.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
