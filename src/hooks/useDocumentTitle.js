import { useState } from "react";
import { useEffect } from "react";

function useDocumentTitle(init) {
  const [title, setTitle] = useState(init);

  useEffect(() => {
    document.title = title;
  }, [title]);
  return [title, setTitle];
}

export default useDocumentTitle;
