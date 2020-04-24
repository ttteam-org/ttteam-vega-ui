import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { FileIconAvi } from "../index";
import { FileIconBmp } from "../index";
import { FileIconCsv } from "../index";
import { FileIconDoc } from "../index";
import { FileIconExe } from "../index";
import { FileIconGif } from "../index";
import { FileIconJpg } from "../index";
import { FileIconLoading } from "../index";
import { FileIconMov } from "../index";
import { FileIconMp3 } from "../index";
import { FileIconMp4 } from "../index";
import { FileIconPdf } from "../index";
import { FileIconPng } from "../index";
import { FileIconPtt } from "../index";
import { FileIconRar } from "../index";
import { FileIconRtf } from "../index";
import { FileIconTiff } from "../index";
import { FileIconTxt } from "../index";
import { FileIconUndefined } from "../index";
import { FileIconWav } from "../index";
import { FileIconXls } from "../index";
import { FileIconZip } from "../index";

import { IconsItem } from "./Item/Icons-Item";

const defaultKnobs = () => ({
  size: select("size", ["s", "m"], "m"),
});

storiesOf("FileIcons", module)
  .addDecorator(withKnobs)
  .add("FileIcons", () => (
    <div
      className={"tpl-grid tpl-grid_s-ratio_1-1-1-1-1 tpl-grid_row-gap_full"}
    >
      <IconsItem name="FileIconAvi" icon={FileIconAvi} {...defaultKnobs()} />
      <IconsItem name="FileIconBmp" icon={FileIconBmp} {...defaultKnobs()} />
      <IconsItem name="FileIconCsv" icon={FileIconCsv} {...defaultKnobs()} />
      <IconsItem name="FileIconDoc" icon={FileIconDoc} {...defaultKnobs()} />
      <IconsItem name="FileIconExe" icon={FileIconExe} {...defaultKnobs()} />
      <IconsItem name="FileIconGif" icon={FileIconGif} {...defaultKnobs()} />
      <IconsItem name="FileIconJpg" icon={FileIconJpg} {...defaultKnobs()} />
      <IconsItem
        name="FileIconLoading"
        icon={FileIconLoading}
        {...defaultKnobs()}
      />
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
      <IconsItem
        name="FileIconUndefined"
        icon={FileIconUndefined}
        {...defaultKnobs()}
      />
      <IconsItem name="FileIconWav" icon={FileIconWav} {...defaultKnobs()} />
      <IconsItem name="FileIconXls" icon={FileIconXls} {...defaultKnobs()} />
      <IconsItem name="FileIconZip" icon={FileIconZip} {...defaultKnobs()} />
    </div>
  ));
