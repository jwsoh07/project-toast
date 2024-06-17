import React from 'react';

import useArray from '../../hooks/useArray';

import { v4 as uuid } from 'uuid';

import useEscapeKeyPress from '../../hooks/useEscapeKeyPress';

export const ToastContext = React.createContext(null);

function ToastProvider({ children }) {

  let { 
    data, 
    addItemAtEnd,
    removeItemAtIndex: removeToastAtIndex, 
    removeAllItems: removeAllToasts,
   } = useArray();

   useEscapeKeyPress(removeAllToasts);

   let addNewToast = (variant, message) => {
    const toast = {
      id: uuid(),
      variant,
      message,
    }

    addItemAtEnd(toast);
   }

   let value = React.useMemo(() => {
    return {
      data,
      removeToastAtIndex,
      addNewToast,
    }
  }, [data])

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  )
}
export default ToastProvider;
