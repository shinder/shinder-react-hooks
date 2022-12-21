import { useState } from "react";

/* shinder: 2022-12-21 */
export default function useLocalStorageJson(key, initValue = null) {
  if (!key) {
    throw new Error("useLocalStorageJson: the first parameter is required!");
  }

  const [value, setValue] = useState(() => {
    let v = null;
    try {
      const str = localStorage.getItem(key);
      if (str) v = JSON.parse(str);
    } catch (ex) {}
    return v || initValue;
  });

  const saveValue = (p) => {
    let v = (p instanceof Function) ? p() : p;
    localStorage.setItem(key, JSON.stringify(v));
    setValue(v);
  };

  return [value, saveValue];
}
