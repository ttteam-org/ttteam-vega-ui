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
- yarn `^1.22.4`
- [GPN UI kit](https://github.com/gpn-prototypes/ui-kit) — дизайн система

Полный список зависимостей можно увидеть в [package.json](../package.json).

## Основные команды

```bash
# Установить зависимости
$ yarn

# Собрать rollup'ом все пакеты и слинковать
$ yarn build # включает в себя:
$ yarn build:ts # сборка typescript'а
$ yarn build:css # сборка css

# Удаление директорий node_modules и dist у всех пакетов
$ yarn clean

# Прогнать все тесты во всех компонентах
$ yarn test

# Запустить тесты в watch-режиме
$ yarn test:watch

# Сформировать отчет по покрытию тестами
$ yarn coverage

# lerna
$ yarn packages:diff
$ yarn packages:bootstrap
$ yarn packages:version
$ yarn packages:link

# Запуск сторибука на 6006 порту
$ yarn storybook

# Собрать статику сторибука
$ yarn storybook:build

# Прогнать форматирование prettier'ом
$ yarn prettier

# Прогнать линтеры: eslint и stylelint
$ yarn lint

# Автофикс ошибок линтеров
$ yarn lint:fix
```
