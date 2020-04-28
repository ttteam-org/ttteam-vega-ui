# Структру проекта

```
.
├── packages // ???
│   ├── components
│   ├── hooks
│   ├── webpack
│   ...
├── public // Публичные файлы (например favicon)
├── scripts // ???
├── types // ??? Кастомные типы для модулей
│
├── package.json
├── tslint.json
├── tsconfig.json
├── yarn.lock
└── .prettierrc/.stylelintrc/.editorconfig и др. конфиги
```

## Структура компонента

**???** Описать структуру компонента
```
└── components
    └── ComponentName
        ├── SubFolders // Внутри папки ComponentName могут находится подпапки типа static/utils/subComponent/etc
        ├── ComponentName.stories.tsx
        ├── ComponentName.test.tsx 
        ├── ComponentName.tsx
        ├── ComponentName.css
        └── index.js // Содержит все экспорты компонента
```

## Форматирование кода

В проекте настроен Prettier и линтеры (eslint, stylelint).

Команды для форматирования:

```bash
$ yarn run lint ???

$ yarn run lint:css ???

$ yarn run lint:js ???

$ yarn run format ???
```

VSCode расширение [Prettier - Code formatter от Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### Eslint

#### Порядок сортировки импортов

**???** Если мы перенесем порядок импортов или напишем своим правила, то отразить здесь. Референс https://github.com/CSSSR/gazprom/wiki/Project-style-guide#eslint