# Структура проекта

```
.
├── packages
│   ├── components // Директория для пакетов
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

- Директории компонентов пишем в кебаб-стиле

## Структура компонента

```
└── components
    └── component-name
        ├── ... // Внутри папки component-name могут находиться подпапки типа static/utils/subComponent/etc
        ├── ComponentName.stories.tsx
        ├── ComponentName.test.tsx
        ├── ComponentName.tsx
        ├── cn-component-name.tsx // экспорт block из bem-cn
        ├── ComponentName.css
        └── index.js // Содержит все экспорты компонента
```

**Правила:**

- Директории компонентов пишем в кебаб-стиле
- Файлы компонентов пишем в camelCase
- Утилиты, хелперы и др. пишем в кебаб-стиле
- При импорте добавялем префикс `Base` для компонентов из ДС, например:

```js
import { Select as BaseSelect } from '@gpn-design/uikit/Select';
```
