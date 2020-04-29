import * as React from 'react';
import { File as BaseFile } from '@gpn-design/uikit/File';

type FileProps = React.ComponentProps<typeof BaseFile>;

export const File: React.FC<FileProps> = (props) => {
  return <BaseFile {...props} />;
};
