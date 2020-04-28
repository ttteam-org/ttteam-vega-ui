import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import {
  FileIconAvi,
  FileIconBmp,
  FileIconCsv,
  FileIconDoc,
  FileIconExe,
  FileIconGif,
  FileIconJpg,
  FileIconLoading,
  FileIconMov,
  FileIconMp3,
  FileIconMp4,
  FileIconPdf,
  FileIconPng,
  FileIconPtt,
  FileIconRar,
  FileIconRtf,
  FileIconTiff,
  FileIconTxt,
  FileIconUndefined,
  FileIconWav,
  FileIconXls,
  FileIconZip,
} from '../../index';

import { IconsItem } from './Item/Icons-Item';

const defaultKnobs = (): Record<string, string> => ({
  size: select('size', ['s', 'm'], 'm'),
});

storiesOf('FileIcons', module)
  .addDecorator(withKnobs)
  .add('FileIcons', () => (
    <div className="tpl-grid tpl-grid_s-ratio_1-1-1-1-1 tpl-grid_row-gap_full">
      <IconsItem name="FileIconAvi" icon={FileIconAvi} {...defaultKnobs()} />
      <IconsItem name="FileIconBmp" icon={FileIconBmp} {...defaultKnobs()} />
      <IconsItem name="FileIconCsv" icon={FileIconCsv} {...defaultKnobs()} />
      <IconsItem name="FileIconDoc" icon={FileIconDoc} {...defaultKnobs()} />
      <IconsItem name="FileIconExe" icon={FileIconExe} {...defaultKnobs()} />
      <IconsItem name="FileIconGif" icon={FileIconGif} {...defaultKnobs()} />
      <IconsItem name="FileIconJpg" icon={FileIconJpg} {...defaultKnobs()} />
      <IconsItem name="FileIconLoading" icon={FileIconLoading} {...defaultKnobs()} />
      <IconsItem name="FileIconMov" icon={FileIconMov} {...defaultKnobs()} />
      <IconsItem name="FileIconMp3" icon={FileIconMp3} {...defaultKnobs()} />
      <IconsItem name="FileIconMp4" icon={FileIconMp4} {...defaultKnobs()} />
      <IconsItem name="FileIconPdf" icon={FileIconPdf} {...defaultKnobs()} />
      <IconsItem name="FileIconPng" icon={FileIconPng} {...defaultKnobs()} />
      <IconsItem name="FileIconPtt" icon={FileIconPtt} {...defaultKnobs()} />
      <IconsItem name="FileIconRar" icon={FileIconRar} {...defaultKnobs()} />
      <IconsItem name="FileIconRtf" icon={FileIconRtf} {...defaultKnobs()} />
      <IconsItem name="FileIconTiff" icon={FileIconTiff} {...defaultKnobs()} />
      <IconsItem name="FileIconTxt" icon={FileIconTxt} {...defaultKnobs()} />
      <IconsItem name="FileIconUndefined" icon={FileIconUndefined} {...defaultKnobs()} />
      <IconsItem name="FileIconWav" icon={FileIconWav} {...defaultKnobs()} />
      <IconsItem name="FileIconXls" icon={FileIconXls} {...defaultKnobs()} />
      <IconsItem name="FileIconZip" icon={FileIconZip} {...defaultKnobs()} />
    </div>
  ));
