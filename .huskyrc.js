const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'prepare-commit-msg': tasks([
      'exec < /dev/tty',
      'git cz --hook || true',
      'node git-commit-message.js',
    ]),
  },
};