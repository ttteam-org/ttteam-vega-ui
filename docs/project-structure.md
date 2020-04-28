# Структру проекта

```
.
├── packages
│   ├── components // директория для пакетов
│   ├── hooks
│   ...
├── public // Публичные файлы (например favicon)
├── scripts
├── types
│
├── package.json
├── tslint.json
├── tsconfig.json
├── yarn.lock
└── др. конфиги лежат в корне
```

**Правила:**

- Директории компонентов пишем в кебаб стиле

## Структура компонента

```
└── components
    └── ComponentName
        ├── ... // Внутри папки ComponentName могут находится подпапки типа static/utils/subComponent/etc
        ├── ComponentName.stories.tsx
        ├── ComponentName.test.tsx
        ├── ComponentName.tsx
        ├── ComponentName.css
        └── index.js // Содержит все экспорты компонента
```

**Правила:**

- При импорте добавялем префикс `Base` для компонентов из ДС, например:

```js
import { Select as BaseSelect } from '@gpn-design/uikit/Select';
```
