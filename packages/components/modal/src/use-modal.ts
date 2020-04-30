import { useCallback, useMemo, useState } from 'react';

type ModalParams = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

export function useModal(): ModalParams {
  const [isOpen, setIsOpen] = useState(false);
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
