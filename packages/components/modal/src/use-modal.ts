import { useCallback, useMemo, useState } from 'react';

type ModalParams = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

export function useModal({ initialOpen = false } = {}): ModalParams {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return useMemo(
    () => ({
      isOpen,
      handleOpen,
      handleClose,
    }),
    [handleClose, handleOpen, isOpen],
  );
}
