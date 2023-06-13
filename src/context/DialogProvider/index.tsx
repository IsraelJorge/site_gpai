import { createContext, useContext, useState } from 'react';

import type { ChildrenProps } from '../../@types/types';
import { ButtonType } from '../../components/Button';

interface ButtonPram {
  label: string;
  icon?: string;
  type?: ButtonType;
  onClick?: VoidFunction;
}

interface DialogOptions {
  title: string;
  message?: string;
  buttons: ButtonPram[];
  open: boolean;
}

interface DialogData {
  current?: DialogOptions;
  showDialog: (options: Omit<DialogOptions, 'open'>) => void;
  closeDialog: VoidFunction;
}

const DialogContext = createContext<DialogData | undefined>(undefined);

export const DialogProvider = ({ children }: ChildrenProps) => {
  const [state, setState] = useState<DialogOptions | undefined>(undefined);

  const handleShow = (options: Omit<DialogOptions, 'open'>) => {
    setState({ ...options, open: true });
  };

  const handleClose = () => {
    if (state) {
      setState((oldstate) => ({ ...oldstate!, open: false }));
    }
  };

  return (
    <DialogContext.Provider
      value={{
        current: state,
        showDialog: handleShow,
        closeDialog: handleClose,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);

  if (context === undefined) {
    throw new Error('useDialog should be used inside of a DialogProvider');
  }

  return context;
};
