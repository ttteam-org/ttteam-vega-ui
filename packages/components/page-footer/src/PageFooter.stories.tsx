/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Button } from '@gpn-prototypes/vega-button';
import { storiesOf } from '@storybook/react';

import { PageFooter } from './PageFooter';

const cssWrapper = {
  width: '960px',
};

const cssExtraClass1 = {
  'display': 'flex',
  'justify-content': 'flex-end',
};

const cssExtraClass2 = {
  'display': 'flex',
  'justify-content': 'space-between',
};

storiesOf('ui/PageFooter', module)
  .add('Одна кнопка', () => (
    <div css={cssWrapper}>
      <PageFooter css={cssExtraClass1}>
        <Button size="m" view="primary" label="Кнопка" />
      </PageFooter>
    </div>
  ))
  .add('Две кнопки', () => (
    <div css={cssWrapper}>
      <PageFooter css={cssExtraClass2}>
        <div>
          <Button size="m" view="primary" label="Кнопка" />
        </div>
        <div>
          <Button size="m" view="primary" label="Кнопка" />
        </div>
      </PageFooter>
    </div>
  ));
