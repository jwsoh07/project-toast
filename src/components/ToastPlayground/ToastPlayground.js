import React from "react";

import Button from "../Button";

import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const [mostRecentToasts, setMostRecentToasts] = React.useState([]);

  function popToast() {
    let nextMostRecentToasts = [...mostRecentToasts];

    if (nextMostRecentToasts.length === 5) {
      nextMostRecentToasts.shift();
    }

    nextMostRecentToasts.push({
      id: crypto.randomUUID(),
      variant: selectedVariant,
      message: message,
    });

    setMostRecentToasts(nextMostRecentToasts);
  }

  function handleRemoveToast(id) {
    let nextMostRecentToasts = [...mostRecentToasts];

    nextMostRecentToasts = nextMostRecentToasts.filter(
      (toast) => toast.id !== id
    );

    setMostRecentToasts(nextMostRecentToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div
          className={styles.row}
          role="group"
          aria-labelledby="variant-label"
        >
          <div className={styles.label} id="variant-label">
            Variant
          </div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant, index) => {
              return (
                <label htmlFor={`variant-${variant}`} key={index}>
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={selectedVariant === variant}
                    onChange={(event) => setSelectedVariant(event.target.value)}
                  />
                  {variant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={popToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>

      <ToastShelf
        toasts={mostRecentToasts}
        handleRemoveToast={handleRemoveToast}
      />
    </div>
  );
}

export default ToastPlayground;
