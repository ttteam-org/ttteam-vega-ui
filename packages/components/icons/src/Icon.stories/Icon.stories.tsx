import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import {
  IconAdd,
  IconAlert,
  IconAlignCenter,
  IconAlignJustify,
  IconAlignLeft,
  IconAlignRight,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconAttach,
  IconBackward,
  IconBarrier,
  IconBento,
  IconBold,
  IconBookmarkFilled,
  IconBookmarkStroked,
  IconCalendar,
  IconCamera,
  IconCancel,
  IconChat,
  IconCheck,
  IconClose,
  IconCollapse,
  IconColorFill,
  IconColorText,
  IconColumns,
  IconComment,
  IconConnection,
  IconCopy,
  IconCrown,
  IconDiamond,
  IconDown,
  IconDrag,
  IconDrop,
  IconEdit,
  IconExpand,
  IconEye,
  IconFavorite,
  IconFilter,
  IconForward,
  IconFunnel,
  IconGas,
  IconHamburger,
  IconItalic,
  IconKebab,
  IconLeaf,
  IconLink,
  IconList,
  IconListNumbered,
  IconLock,
  IconMail,
  IconMeatball,
  IconOpenInNew,
  IconPause,
  IconPhoto,
  IconPlay,
  IconProcessing,
  IconQuestion,
  IconQuote,
  IconRecord,
  IconRemove,
  IconRevert,
  IconRing,
  IconRouble,
  IconSearch,
  IconSelect,
  IconSelectOpen,
  IconSettings,
  IconShuffle,
  IconSortDown,
  IconSortDownCenter,
  IconSortUp,
  IconSortUpCenter,
  IconStop,
  IconStrikethrough,
  IconTable,
  IconTest,
  IconThumbUp,
  IconTie,
  IconTop,
  IconTrash,
  IconType,
  IconUnderline,
  IconUser,
  IconWorld,
} from '../index';

import { IconsItem } from './Item/Icons-Item';

const defaultKnobs = (): Record<string, string> => ({
  size: select('size', ['xs', 's', 'm'], 'm'),
  view: select(
    'view',
    ['alert', 'brand', 'ghost', 'link', 'primary', 'secondary', 'success', 'warning'],
    'primary',
  ),
});

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('IconsNew', () => (
    <div className="tpl-grid tpl-grid_s-ratio_1-1-1-1-1 tpl-grid_row-gap_full">
      <IconsItem name="IconAdd" icon={IconAdd} {...defaultKnobs()} />
      <IconsItem name="IconAlert" icon={IconAlert} {...defaultKnobs()} />
      <IconsItem name="IconAlignJustify" icon={IconAlignJustify} {...defaultKnobs()} />
      <IconsItem name="IconAlignCenter" icon={IconAlignCenter} {...defaultKnobs()} />
      <IconsItem name="IconAlignLeft" icon={IconAlignLeft} {...defaultKnobs()} />
      <IconsItem name="IconAlignRight" icon={IconAlignRight} {...defaultKnobs()} />
      <IconsItem name="IconArrowDown" icon={IconArrowDown} {...defaultKnobs()} />
      <IconsItem name="IconArrowLeft" icon={IconArrowLeft} {...defaultKnobs()} />
      <IconsItem name="IconArrowRight" icon={IconArrowRight} {...defaultKnobs()} />
      <IconsItem name="IconArrowUp" icon={IconArrowUp} {...defaultKnobs()} />
      <IconsItem name="IconAttach" icon={IconAttach} {...defaultKnobs()} />
      <IconsItem name="IconBackward" icon={IconBackward} {...defaultKnobs()} />
      <IconsItem name="IconBarrier" icon={IconBarrier} {...defaultKnobs()} />
      <IconsItem name="IconBento" icon={IconBento} {...defaultKnobs()} />
      <IconsItem name="IconBold" icon={IconBold} {...defaultKnobs()} />
      <IconsItem name="IconBookmarkFilled" icon={IconBookmarkFilled} {...defaultKnobs()} />
      <IconsItem name="IconBookmarkStroked" icon={IconBookmarkStroked} {...defaultKnobs()} />
      <IconsItem name="IconCalendar" icon={IconCalendar} {...defaultKnobs()} />
      <IconsItem name="IconCamera" icon={IconCamera} {...defaultKnobs()} />
      <IconsItem name="IconCancel" icon={IconCancel} {...defaultKnobs()} />
      <IconsItem name="IconChat" icon={IconChat} {...defaultKnobs()} />
      <IconsItem name="IconCheck" icon={IconCheck} {...defaultKnobs()} />
      <IconsItem name="IconClose" icon={IconClose} {...defaultKnobs()} />
      <IconsItem name="IconCollapse" icon={IconCollapse} {...defaultKnobs()} />
      <IconsItem name="IconColorText" icon={IconColorText} {...defaultKnobs()} />
      <IconsItem name="IconColorFill" icon={IconColorFill} {...defaultKnobs()} />
      <IconsItem name="IconColumns" icon={IconColumns} {...defaultKnobs()} />
      <IconsItem name="IconComment" icon={IconComment} {...defaultKnobs()} />
      <IconsItem name="IconConnection" icon={IconConnection} {...defaultKnobs()} />
      <IconsItem name="IconCopy" icon={IconCopy} {...defaultKnobs()} />
      <IconsItem name="IconCrown" icon={IconCrown} {...defaultKnobs()} />
      <IconsItem name="IconDiamond" icon={IconDiamond} {...defaultKnobs()} />
      <IconsItem name="IconDown" icon={IconDown} {...defaultKnobs()} />
      <IconsItem name="IconDrag" icon={IconDrag} {...defaultKnobs()} />
      <IconsItem name="IconDrop" icon={IconDrop} {...defaultKnobs()} />
      <IconsItem name="IconEdit" icon={IconEdit} {...defaultKnobs()} />
      <IconsItem name="IconExpand" icon={IconExpand} {...defaultKnobs()} />
      <IconsItem name="IconEye" icon={IconEye} {...defaultKnobs()} />
      <IconsItem name="IconFavorite" icon={IconFavorite} {...defaultKnobs()} />
      <IconsItem name="IconFilter" icon={IconFilter} {...defaultKnobs()} />
      <IconsItem name="IconForward" icon={IconForward} {...defaultKnobs()} />
      <IconsItem name="IconFunnel" icon={IconFunnel} {...defaultKnobs()} />
      <IconsItem name="IconGas" icon={IconGas} {...defaultKnobs()} />
      <IconsItem name="IconHamburger" icon={IconHamburger} {...defaultKnobs()} />
      <IconsItem name="IconItalic" icon={IconItalic} {...defaultKnobs()} />
      <IconsItem name="IconKebab" icon={IconKebab} {...defaultKnobs()} />
      <IconsItem name="IconLeaf" icon={IconLeaf} {...defaultKnobs()} />
      <IconsItem name="IconLink" icon={IconLink} {...defaultKnobs()} />
      <IconsItem name="IconList" icon={IconList} {...defaultKnobs()} />
      <IconsItem name="IconListNumbered" icon={IconListNumbered} {...defaultKnobs()} />
      <IconsItem name="IconLock" icon={IconLock} {...defaultKnobs()} />
      <IconsItem name="IconMail" icon={IconMail} {...defaultKnobs()} />
      <IconsItem name="IconMeatball" icon={IconMeatball} {...defaultKnobs()} />
      <IconsItem name="IconOpenInNew" icon={IconOpenInNew} {...defaultKnobs()} />
      <IconsItem name="IconPause" icon={IconPause} {...defaultKnobs()} />
      <IconsItem name="IconPhoto" icon={IconPhoto} {...defaultKnobs()} />
      <IconsItem name="IconPlay" icon={IconPlay} {...defaultKnobs()} />
      <IconsItem name="IconProcessing" icon={IconProcessing} {...defaultKnobs()} />
      <IconsItem name="IconQuestion" icon={IconQuestion} {...defaultKnobs()} />
      <IconsItem name="IconQuote" icon={IconQuote} {...defaultKnobs()} />
      <IconsItem name="IconRecord" icon={IconRecord} {...defaultKnobs()} />
      <IconsItem name="IconRemove" icon={IconRemove} {...defaultKnobs()} />
      <IconsItem name="IconRevert" icon={IconRevert} {...defaultKnobs()} />
      <IconsItem name="IconRing" icon={IconRing} {...defaultKnobs()} />
      <IconsItem name="IconRouble" icon={IconRouble} {...defaultKnobs()} />
      <IconsItem name="IconSearch" icon={IconSearch} {...defaultKnobs()} />
      <IconsItem name="IconSelect" icon={IconSelect} {...defaultKnobs()} />
      <IconsItem name="IconSelectOpen" icon={IconSelectOpen} {...defaultKnobs()} />
      <IconsItem name="IconSettings" icon={IconSettings} {...defaultKnobs()} />
      <IconsItem name="IconShuffle" icon={IconShuffle} {...defaultKnobs()} />
      <IconsItem name="IconSortDown" icon={IconSortDown} {...defaultKnobs()} />
      <IconsItem name="IconSortDownCenter" icon={IconSortDownCenter} {...defaultKnobs()} />
      <IconsItem name="IconSortUp" icon={IconSortUp} {...defaultKnobs()} />
      <IconsItem name="IconSortUpCenter" icon={IconSortUpCenter} {...defaultKnobs()} />
      <IconsItem name="IconStop" icon={IconStop} {...defaultKnobs()} />
      <IconsItem name="IconStrikethrough" icon={IconStrikethrough} {...defaultKnobs()} />
      <IconsItem name="IconTable" icon={IconTable} {...defaultKnobs()} />
      <IconsItem name="IconTest" icon={IconTest} {...defaultKnobs()} />
      <IconsItem name="IconThumbUp" icon={IconThumbUp} {...defaultKnobs()} />
      <IconsItem name="IconTrash" icon={IconTrash} {...defaultKnobs()} />
      <IconsItem name="IconTie" icon={IconTie} {...defaultKnobs()} />
      <IconsItem name="IconTop" icon={IconTop} {...defaultKnobs()} />
      <IconsItem name="IconType" icon={IconType} {...defaultKnobs()} />
      <IconsItem name="IconUnderline" icon={IconUnderline} {...defaultKnobs()} />
      <IconsItem name="IconUser" icon={IconUser} {...defaultKnobs()} />
      <IconsItem name="IconWorld" icon={IconWorld} {...defaultKnobs()} />
    </div>
  ));
