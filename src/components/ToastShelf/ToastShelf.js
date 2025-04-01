import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleRemoveToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              id={id}
              variant={variant}
              content={message}
              handleRemoveToast={handleRemoveToast}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
