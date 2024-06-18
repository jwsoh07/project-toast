import React from 'react';

import Button from '../Button';

import styles from './ToastForm.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastForm() {
  const [message, setMessage] = React.useState(""); 
  let [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const { addNewToast } = React.useContext(ToastContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewToast(variant, message);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
      <form className={styles.controlsWrapper} onSubmit={onSubmitHandler}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput} 
              value={message}
              onChange={event => {
                setMessage(
                  event.target.value
                );
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >      
          {/* TODO Other Variant radio buttons here */}
          {VARIANT_OPTIONS.map((option) => {
            const id = `variant-${option}`;
            return (
              <label htmlFor={id} key={id}>
                <input
                  type="radio"
                  name="toast-variant"
                  id={id}
                  value={option}
                  checked={variant === option}
                  onChange={event => {
                    setVariant(event.target.value)
                  }}
                />
                {option}
              </label>
            )
          })}

          {/* <RadioGroup /> */}
          <br />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
  )
}

export default ToastForm;
