import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, content, handleRemoveToast }) {
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div
      role="alert"
      aria-label={`${variant} alert`}
      className={`${styles.toast} ${styles[variant]}`}
    >
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{content}</p>
      <button
        className={styles.closeButton}
        onClick={() => handleRemoveToast(id)}
      >
        <X size={24} aria-hidden="true" />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
