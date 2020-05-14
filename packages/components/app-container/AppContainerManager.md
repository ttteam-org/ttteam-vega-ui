# AppContainerManager

Класс предоставляет своему экземпляру API для управления корневым контейнером приложения.

### API

Принимает в конструктор

```ts
rootId - id для корневого элемента приложения
portalRootId - id корневого элемента для порталов приложения
```

Методы

```ts
createPortalRoot(params?: { className?: string }) - метод для создания корневого элемента для порталов.
removePortalRoot() - метод для удаления корневого элемента для порталов.
getPortalRoot() - возвращает корневой элемент для порталов
getRoot - возвращает корневой элемент приложения
updatePortalRootClassName(className: string) - обновляет класснейм для корневого портала
updateRootClassName(className: string) - обновляет класснейм для корневого элемента

```
