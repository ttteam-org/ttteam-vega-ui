import React, { useRef } from 'react';

import { useOnClickOutside } from '..';

type TestProps = {
  onClickOutside: (e: MouseEvent | TouchEvent) => void;
};

export const TestHookComponent: React.FC<TestProps> = ({ onClickOutside }) => {
  const ref = useRef(null);

  useOnClickOutside(ref, onClickOutside);

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
