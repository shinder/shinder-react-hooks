import { useEffect, useState } from "react";
import localforage from "localforage";

/* shinder: 2022-12-24 */
/* 由於非同步的問題 不太適合用於高頻率設定值的情況 */

export default function useLocalForage(key, initValue = {}) {
  if (!key) {
    throw new Error("useLocalForage: the first parameter is required!");
  }

  const [value, setValue] = useState(initValue);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    localforage.getItem(key).then((v) => {
      setInitialized(true);
      setValue({ ...initValue, ...v });
    });
  }, [key]);

  const saveValue = (p, callback=()=>{}) => {
    let v = p instanceof Function ? p() : p;
    setValue(v);
    localforage.setItem(key, v).then(callback);
  };

  return [value, saveValue, initialized];
}
