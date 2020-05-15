# Начало работы

```bash
# установка зависимостей
$ yarn

# сборка существующих пакетов rollup'ом
# нужно делать перед прогоном тестов, линтеров, etc.
$ yarn build

# запуск сторибука
$ yarn storybook
```

## Зависимости

- node.js `^12.16.2`
- yarn `^12.16.2`
- [GPN UI kit](https://github.com/gpn-prototypes/ui-kit) — дизайн система

Полный список зависимостей можно увидеть в [package.json](../package.json).

## Основные команды

```bash
# Установить зависимости
$ yarn

# Собрать rollup'ом все пакеты и слинковать
$ yarn build

# Удаление директорий node_modules и dist у всех пакетов
$ yarn clean

# Прогнать все тесты во всех компонентах
$ yarn test

# Сформировать отчет по покрытию тестами
$ yarn coverage

# Запустить тесты в watch-режиме
$ yarn test:watch

# lerna
$ yarn diff
$ yarn bootstrap
$ yarn update:version
$ yarn link:packages

# Запуск сторибука на 6006 порту
$ yarn storybook

# Собрать статику сторибука
$ yarn build-storybook

# Проверить типизацию???
$ yarn types

# Запустить проверку типизации в watch-режиме???
$ yarn types:watch

# Прогнать форматирование prettier'ом
$ yarn prettier

# Прогнать линтеры: eslint и stylelint
$ yarn lint

# Автофикс ошибок линтеров
$ yarn lint:fix
```
