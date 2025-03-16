import { useState } from "react";
import { useEffect } from "react";

function useDocumentTitle(init = "") {
  const [value, setValue] = useState(init);

  useEffect(() => {
    document.value = value;
    setValue(value);
  }, [value]);
  return value;
}

export default useDocumentTitle;
