import React from 'react';

import styles from './ToastShelf.module.css';

import Toast from '../Toast/Toast';

import { ToastContext } from '../ToastProvider/ToastProvider';



function ToastShelf() {
  const { data: toasts, removeToastAtIndex } = React.useContext(ToastContext);

  return (
    <ol 
      className={styles.toastContainer}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(function (toast, index) {
        return (
          <li className={styles.toastWrapper} key={toast.id} >
            <Toast               
              variant={toast.variant} 
              onDismiss={() => removeToastAtIndex(index)}
            >{toast.message}</Toast>
          </li>
        )
      })}
    </ol>
  )
  
}


// function ToastShelf() {
//   return (
//     <ol className={styles.wrapper}>
//       <li className={styles.toastWrapper}>
//         <Toast variant="notice">Example notice toast</Toast>
//       </li>
//       <li className={styles.toastWrapper}>
//         <Toast variant="error">Example error toast</Toast>
//       </li>
//     </ol>
//   );
// }

export default ToastShelf;
