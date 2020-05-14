import React from 'react';
import { Button } from '@gpn-prototypes/vega-button';
import { storiesOf } from '@storybook/react';
import { block } from 'bem-cn';

import { PageFooter } from './PageFooter';

import './PageFooterStories.css';

const cnStories = block('PageFooterStories');

storiesOf('ui/PageFooter', module)
  .add('Кнопки с одной стороны', () => (
    <div className={cnStories('wrapper')}>
      <PageFooter className={cnStories('case-1').toString()}>
        <Button size="m" view="primary" label="Кнопка" />
      </PageFooter>
    </div>
  ))
  .add('Кнопки с двух сторон', () => (
    <div className={cnStories('wrapper')}>
      <PageFooter className={cnStories('case-2').toString()}>
        <div>
          <Button size="m" view="primary" label="Кнопка" />
        </div>
        <div>
          <Button size="m" view="primary" label="Кнопка" />
        </div>
      </PageFooter>
    </div>
  ));
