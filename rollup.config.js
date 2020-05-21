import fs from 'fs';
import path from 'path';

import resolve from '@rollup/plugin-node-resolve';
import typescript from '@wessberg/rollup-plugin-ts';
import postcss from 'rollup-plugin-postcss';

const { PROJECT_DIR } = require('./config');

const PACKAGE_ROOT = process.cwd();

const getInputFilePath = () => {
  const srcPath = path.join(PACKAGE_ROOT, 'src', 'index.ts');
  const noSrcPath = path.join(PACKAGE_ROOT, 'index.ts');

  try {
    fs.accessSync(srcPath, fs.constants.F_OK);
    return srcPath;
  } catch (e) {} // eslint-disable-line no-empty

  fs.accessSync(noSrcPath, fs.constants.F_OK);
  return noSrcPath;
};

const changeSlash = (pathStr) => {
  const isExtendedLengthPath = /^\\\\\?\\/.test(pathStr);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(pathStr); // eslint-disable-line no-control-regex

  if (isExtendedLengthPath || hasNonAscii) {
    return pathStr;
  }

  return pathStr.replace(/\\/g, '/');
};

const INPUT_FILE = getInputFilePath();
const OUTPUT_DIR = path.join(PACKAGE_ROOT, 'dist');
const PKG_JSON = require(path.join(PACKAGE_ROOT, 'package.json')); // eslint-disable-line import/no-dynamic-require
const TS_CONFIG_PATH = path.join(PROJECT_DIR, 'tsconfig.json');
const BABEL_CONFIG_PATH = path.join(PROJECT_DIR, 'babel.config.js');

const formats = [{ type: 'esm', target: 'es6' }];

function isExternalModule(id) {
  return !id.startsWith('.') && !id.includes(changeSlash(path.join(PACKAGE_ROOT, 'src')));
}

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];

export default formats.map((format) => {
  return {
    input: INPUT_FILE,
    output: {
      file: path.join(OUTPUT_DIR, `index.${format.type}.js`),
      format: format.type,
      name: PKG_JSON.name,
      exports: 'named',
      globals: {
        react: 'React',
      },
    },
    external: isExternalModule,
    plugins: [
      resolve({ extensions }),
      postcss({ extract: true }),
      typescript({
        transpiler: 'babel',
        babelConfig: BABEL_CONFIG_PATH,
        tsconfig: TS_CONFIG_PATH,
        outDir: 'dist',
        tsconfigOverride: {
          compilerOptions: {
            target: format.target,
          },
          exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
        },
      }),
    ],
  };
});
