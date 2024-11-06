import { useState } from "react";
import axios from "axios";

const usePostData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = async (postData) => {
    setLoading(true);
    try {
      const response = await axios.post(url, postData);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postData };
};

export default usePostData;
