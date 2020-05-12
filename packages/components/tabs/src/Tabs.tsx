import React from 'react';
import { Tabs as BaseTabs } from '@gpn-design/uikit/Tabs';
import { useDraggableContainer } from '@vega-ui/hooks';
import { IconArrowLeft, IconArrowRight } from '@vega-ui/icons';
import { block } from 'bem-cn';

import './Tabs.css';

type BaseTabsComponent = typeof BaseTabs;

const cnTabs = block('VegaTabs');

export const Tabs: BaseTabsComponent = (props) => {
  const { size } = props;

  const draggableTab = useDraggableContainer({
    findActiveElement(wrapper: HTMLElement) {
      return wrapper.querySelector('.Tabs-Tab_active');
    },
  });

  const handleScrollLeft = (): void => {
    draggableTab.scroll('left');
  };
  const handleScrollRight = (): void => {
    draggableTab.scroll('right');
  };

  return (
    <div className={cnTabs({ size })}>
      {!draggableTab.isLeftLimit && (
        <div className={cnTabs('ScrollLeft')}>
          <button type="button" className={cnTabs('ScrollButton')} onClick={handleScrollLeft}>
            <IconArrowLeft />
          </button>
        </div>
      )}
      <div className={cnTabs('Inner')} {...draggableTab.getRootProps()}>
        <div className={cnTabs('InnerContent')} {...draggableTab.getWrapperProps()}>
          <BaseTabs {...props} className={cnTabs('Native', { align: 'center' })} />
        </div>
      </div>
      {!draggableTab.isRightLimit && (
        <div className={cnTabs('ScrollRight')}>
          <button type="button" className={cnTabs('ScrollButton')} onClick={handleScrollRight}>
            <IconArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};
