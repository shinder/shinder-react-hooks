import { useEffect } from "react";

/* shinder: 2022-12-21, 參考 ABL THE PROBLEM SOLVER 的寫法 */
export default function useDebounce(doSomething, msec = 1000) {
  useEffect(() => {
    const timeoutId = setTimeout(doSomething, msec);

    return () => clearTimeout(timeoutId);
  }, [doSomething, msec]);
}
