import { useEffect } from "react";
import { useState } from "react";

function useFetch(init) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`${init}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Lỗi khi tải dữ liệu");
        }
        return res.json();
      })
      .then((resData) => {
        setData(resData);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}

export default useFetch;

// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

// useEffect(() => {
//   setLoading(true);
//   fetch(`${init}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Lỗi khi tải dữ liệu");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       setData(data);
//       setLoading(false);
//     })
//     .catch((error) => {
//       setError(error.message);
//       setLoading(false);
//     });
// }, []);

// return { data, loading, error };
