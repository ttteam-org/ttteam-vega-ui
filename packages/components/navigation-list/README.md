# @gpn-prototypes/vega-navigation-list

Компонент "Навигация"

<img src="docs/pic-1.png" width="300">

### Установка

    yarn add @gpn-prototypes/vega-navigation-list

### Примеры использования

#### Без иконки и разделителя

<img src="docs/pic-1.png" width="300">

```jsx
import { NavigationList } from '@gpn-prototypes/vega-navigation-list';

export const MyComponent = () => {
  const active = true;

  return (
    <NavigationList>
      <NavigationList.Item active={active}>Описание проекта</NavigationList.Item>
      <NavigationList.Item>Участники</NavigationList.Item>
      <NavigationList.Item>Связанные документы и файлы</NavigationList.Item>
    </NavigationList>
  );
};
```

#### С иконкой

<img src="docs/pic-2.png" width="300">

Обратите внимание, что не стоит использовать свойство `justify-content: space-between` для разделения текста и элемента иконки. При включенной нумерации (`ordered`) числа для нумерации добавляются с помощью псевдоэлемента `::before` и, как следствие, будут считаться третьим `flex` элементом.

```jsx
import { NavigationList } from '@gpn-prototypes/vega-navigation-list';
import { IconCheck } from '@gpn-prototypes/vega-icons';

export const MyComponent = () => {
  const active = true;

  return (
    <NavigationList>
      <NavigationList.Item className="withIcon">
        Описание проекта
        <IconCheck size="s" view="success" className="icon" />
      <NavigationList.Item>
      <NavigationList.Item active={active}>Участники</NavigationList.Item>
      <NavigationList.Item>Связанные документы и файлы</NavigationList.Item>
    </NavigationList>
  );
};
```

```css
.withIcon {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.icon {
  margin-left: auto;
}
```

#### С разделителем

<img src="docs/pic-3.png" width="300">

```jsx
import { NavigationList } from '@gpn-prototypes/vega-navigation-list';

export const MyComponent = () => {
  const active = true;

  return (
    <NavigationList>
      <NavigationList.Item active={active}>Описание проекта</NavigationList.Item>
      <NavigationList.Item>Участники</NavigationList.Item>
      <NavigationList.Item>Связанные документы и файлы</NavigationList.Item>
      <NavigationList.Delimiter />
      <NavigationList.Item>Похожие проекты</NavigationList.Item>
      <NavigationList.Item>Описание</NavigationList.Item>
    </NavigationList>
  );
};
```

### API

```ts
type NavigationListProps = {
  ordered?: boolean; // Добавляет нумерацию элементов
  className?: string;
};

type NavigationListItemProps = {
  active?: boolean; // Индикатор активного элемента
  className?: string;
  onClick?: (event: React.SyntheticEvent) => void;
};

type NavigationListDelimiterProps = {
  className?: string;
};
```