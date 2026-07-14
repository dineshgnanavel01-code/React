import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(URL) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (URL) {
      fetchData();
    }
  }, [URL]);

  return { data, error, loading };
}

export default useFetchData;