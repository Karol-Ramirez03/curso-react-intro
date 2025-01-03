import React from 'react';


// CustomHooks:
function useLocalStorage(itemName, initialValue){
  const localStorageItem =localStorage.getItem(itemName);
  
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem =JSON.parse(localStorageItem)
    
  }
  const [Item, setItem]= React.useState(parsedItem);


  const saveItem = (newItem) => {
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem)
  }

  return [Item, saveItem];
}

export {useLocalStorage}