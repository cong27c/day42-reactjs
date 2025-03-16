import { useEffect } from "react";
import { useState } from "react";

function useFetch(init) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${init}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lỗi khi tải dữ liệu");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

export default useFetch;
