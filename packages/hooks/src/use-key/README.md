# useKey

Хук, необходимый для считывания клика на кнопку

### Пример использования

```jsx
const SomeComponent: React.FC<TestProps> = ({ onKeyClick }) => {
  useKey('Enter', onKeyClick);
  return <div>test component</div>;
};
```

### API

```ts
callback - Коллбек, который вызовется по клику на кнопку на клавитуре
key - Код кнопки на клавиатуре (Прим.: https://keycode.info/)
keyevent - Тип ивента, на который реагировать хуку ('keydown' | 'keypress' | 'keyup')
```
