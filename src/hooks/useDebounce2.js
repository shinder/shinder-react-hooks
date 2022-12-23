import { useEffect, useState } from "react";

/* shinder: 2022-12-21 */
// doSomething 最好是是使用 useCallback 的函式
export default function useDebounce2(defaultValue, doSomething, msec = 1000) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      doSomething(value);
    }, msec);

    return () => clearTimeout(timeoutId);
  }, [doSomething, msec, value]);

  return [value, setValue];
}
