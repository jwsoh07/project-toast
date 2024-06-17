import React from 'react';

// i want it to be able to store all the different toasts
// and it's corresponding showToasts data

function useEscapeKeyPress(callback) {

  function handleEscapeKeyPress (e) {
    if (e.code === "Escape") {
      callback();
    }
  }
 
  React.useEffect(() => {
    window.addEventListener('keydown', handleEscapeKeyPress)

    return () => { 
      window.removeEventListener('keydown', handleEscapeKeyPress)};
  }, []);
}

export default useEscapeKeyPress;
