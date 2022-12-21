import { useState, useEffect } from "react";

/* shinder: 2022-12-21, 參考 Brad Traversy 的寫法 */
/* 缺點: hooks 應該只能在 component 的最前面使用 */
export default function useFetchJson(url, options = {}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    try {
      const r = await fetch(url, options);
      const d = await r.json();
      setData(d);
    } catch (ex) {
      setError(ex);
    }
    setLoading(false);
  };
  useEffect(() => {
    sendRequest();
  }, []);

  return [data, loading, error];
}
