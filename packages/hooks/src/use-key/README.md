# useKey

Хук, необходимый для считывания клика на кнопку

### Пример использования

```jsx
const TestComponent: React.FC<TestProps> = ({ onKeyClick }) => {
  useKey({ callback: onKeyClick, key: 'Enter' });
  return <div>test component</div>;
};
```

### API

```
callback - Коллбек, который вызовется по клику на кнопку на клавитуре
key - Код кнопки на клавиатуре
keyevent - Тип ивента, на который реагировать хуку
```
