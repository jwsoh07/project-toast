import React from 'react';

// i want it to be able to store all the different toasts
// and it's corresponding showToasts data

function useArray(initialArray = []) {
  const [data, setData] = React.useState(initialArray);
  
  const removeItemAtIndex = (index) => {
    const nextData = [...data];
    if (index > -1 && index < data.length) { 
      nextData.splice(index, 1); 
    }
    setData(nextData);
  }
  
  const addItemAtEnd = (item) => {
    const nextData = [...data];
    nextData.push(item); 
    setData(nextData);
  }

  const removeAllItems = () => {
    setData([]);
  }

  return { data, removeItemAtIndex, addItemAtEnd, removeAllItems };
}

export default useArray;
