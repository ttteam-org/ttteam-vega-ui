# useOnClickOutside

Данный хук необходим для кейсов, где нужно считывать клик вне компонента и производить по нему какое-то действие.

### API

```
handler - Функция, которая вызовется по клику вне компонента
ref - Ссылка на компонент, на котором нужно считывать клик вне
```

### Пример использования

```
import React from 'react';
import { useOnClickOutside } from '@vega-ui/hooks';

type TestProps = {
  onClickOutside: (e: MouseEvent | TouchEvent) => void;
};

export const TestHookComponent: React.FC<TestProps> = ({ onClickOutside }) => {
  const ref = useRef(null);

  useOnClickOutside({ ref, handler: onClickOutside });

  return (
    <>
      <div ref={ref} data-testid="div-test-id">
        test-div
      </div>
      <button type="button" data-testid="button-test-id">
        test-button
      </button>
    </>
  );
};
```
