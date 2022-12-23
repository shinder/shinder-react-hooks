import { useEffect, useRef, useLayoutEffect } from "react";

/* shinder: 2022-12-23 */
export default function useIsMounted() {
  const sRef = useRef(true)

  useEffect(() => {
    sRef.current = true;
    return () => sRef.current=false;
  }, []);
  return sRef;
}

/* 另一種寫法: shinder: 2022-12-23 參考 ABL THE PROBLEM SOLVER 的寫法 */
export function useIsMounted2() {
  const sRef = useRef(true)

  useLayoutEffect(() => {
    sRef.current = true;
    return () => sRef.current=false;
  }, []);
  return sRef;
}