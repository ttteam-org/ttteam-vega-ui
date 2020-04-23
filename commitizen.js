module.exports = {
  types: [
    { value: 'feat', name: 'feat:      Добавление нового функционала' },
    { value: 'fix', name: 'fix:       Исправление ошибок' },
    { value: 'test', name: 'test:      Добавление тестов' },
    {
      value: 'refactor',
      name: 'refactor:  Правки кода без исправления ошибок или добавления новых функций',
    },
    {
      value: 'build',
      name: 'build:     Сборка проекта и изменение окружения',
    },
    { value: 'docs', name: 'docs:      Обновление документации' },
    { value: 'ci', name: 'ci:        Настройка CI и работа со скриптами' },
  ],

  scopes: [{ name: 'custom' }],

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
