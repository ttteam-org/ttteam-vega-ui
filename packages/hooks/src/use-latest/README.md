# useLatest

Данный хук необходим для кейсов, где нужно получить последнее значение ref object.

### API

```
value - value, у которого нужно получить последнее значение
```

### Пример использования

```
 const handlerRef: RefObject<Handler> = useLatest<Handler>(handler);
```
