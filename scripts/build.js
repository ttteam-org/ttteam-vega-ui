const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { PROJECT_DIR } = require('../config');
const PGK = require('../package.json');

function exec(cmd) {
  execSync(cmd, { stdio: 'inherit', env: process.env });
}

const cwd = process.cwd();

const ROLLUP_CONFIG_PATH = path.join(PROJECT_DIR, 'rollup.config.js');

PGK.workspaces.forEach((packageDir) => {
  process.chdir(path.join(PROJECT_DIR, packageDir));
  exec(`rollup -c=${ROLLUP_CONFIG_PATH}`);

  try {
    const fsOptions = { encoding: 'utf8' };
    const codeToPrepend = `import "./index.es.css";\n`;
    const esJSFilePath = './dist/index.es.js';
    const currentFileData = fs.readFileSync(esJSFilePath, fsOptions);

    fs.writeFileSync(esJSFilePath, codeToPrepend + currentFileData, fsOptions);
  } catch (e) {} // eslint-disable-line no-empty
});

process.chdir(cwd);
