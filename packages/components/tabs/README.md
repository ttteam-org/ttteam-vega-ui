# @vega-ui/tabs

Компонент-обёртка для Tabs из UI-kit.
![Модальное окно](docs/modal.png)

### Установка

```
yarn add @gpn-prototypes/vega-tabs

```

### Пример использования

```jsx
import { Tabs } from '@gpn-prototypes/tabs';
import { IconCamera, IconPhoto, IconRing } from '@gpn-prototypes/icons';

export const MyComponent = () => {
  const tabs = [
    {
      name: 'Первый',
      icon: IconPhoto,
    },
    {
      name: 'Второй вариант',
      icon: IconRing,
    },
    {
      name: 'Третий вариант',
      icon: IconCamera,
    },
  ];

  const [valueTab, setValueTab] = useState([
    {
      name: 'Второй вариант',
    },
  ]);

  return (
    <>
      <Tabs
        size="s"
        view="bordered"
        withIcon
        items={tabs}
        value={valueTab}
        getItemKey={(item) => item.name}
        getItemLabel={(item) => item.name}
        getItemIcon={withIcon ? (item) => item.icon : undefined}
        onChange={({ value }) => setValueTab(value)}
      />
    </>
  );
};
```

### API компонента

```ts
type TabsProps = {
  size: 's' | 'm'; // для задания размера табов
  view: 'bordered' | 'clear'; // отображать ли линию по табами
  withIcon: boolean; // отображать иконки
  onlyIcon: boolean; // отображать только иконки
  items: ItemTabs[]; // табы
  value: ItemTabs[]; // активный таб
  onChange: ({ value }) => void; // метода для смены таба и запуская сопутсвующей функции обратного вызова
  getItemKey: (item: ItemTab) => any; // метод для задания key таба
  getItemLabel: (item: ItemTab) => any; // метод для задания текста таба
  getItemIcon: (item: ItemTab) => any; // метод для отображения иконки в табе
};
```
