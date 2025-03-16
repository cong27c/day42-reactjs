import { useState } from "react";

function useToggle(initialValue = false) {
  const [bool, setBool] = useState(initialValue);
  const setValue = () => {
    try {
      setBool((value) => !value);
    } catch (error) {
      console.log(error);
    }
  };
  return [bool, setValue];
}

export default useToggle;
