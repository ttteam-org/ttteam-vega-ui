module.exports = {
  types: [
    { value: 'feature', name: 'feature:      Добавление нового функционала' },
    { value: 'fix', name: 'fix:       Исправление багов' },
    { value: 'test', name: 'test:      Добавление тестов' },
    {
      value: 'refactor',
      name: 'refactor:  Правки кода без исправления ошибок или добавления новых функций',
    },
    { value: 'docs', name: 'docs:      Обновление документации' },
    { value: 'chore', name: 'chore     Обслуживание кода'}
  ],

  scopes: [
    { name: 'custom' },
    { name: 'components' },
    { name: 'global' }
  ],

  messages: {
    type: 'Тип изменений',
    scope: 'Область изменений (опционально):',
    customScope: 'Введите вашу область:',
    subject: 'Краткое описание изменений:\n',
    body: 'Подробное описание изменений (опционально):\n',
    footer: 'Дополнительная информация:\n',
    confirmCommit: 'Сохранить получившийся коммит?',
  },
  allowCustomScopes: true,
  subjectLimit: 100,
};
