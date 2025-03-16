// import { useEffect } from "react";
import { useState } from "react";

function useLocalStorage(key, initialValues) {
  const [storage, setStorage] = useState(() => {
    try {
      const item = localStorage.getItem(`${key}`);
      return item ? JSON.parse(item) : initialValues;
    } catch (error) {
      console.log(error);
      return initialValues;
    }
  });
  const setValue = (value) => {
    try {
      const valueStorage = value instanceof Function ? value(storage) : value;
      setStorage(valueStorage);
      localStorage.setItem(`${key}`, JSON.stringify(valueStorage));
    } catch (error) {
      console.log(error);
    }
  };
  return [storage, setValue];
}

export default useLocalStorage;
