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
});

process.chdir(cwd);
