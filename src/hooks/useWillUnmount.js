import { useRef, useEffect } from "react";

/* shinder: 2022-12-21, 參考 ABL THE PROBLEM SOLVER 的寫法 */
export default function useWillUnmount(fn) {
  const fnRef = useRef();
  fnRef.current = fn;
  useEffect(() => {
    return () => {
      fnRef.current();
    };
  }, []);
}
