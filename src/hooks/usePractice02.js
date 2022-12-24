import { useEffect, useState } from "react";

/* shinder: 2022-12-24  */
// 這個例子是定時改變 hook 內的 state，查看 component updated 的狀況

export default function usePractice02(msec = 1000) {
  const [count, setCount] = useState(0);

  console.log(`usePractice02:`, { count });
  useEffect(() => {
    const iid = setInterval(() => {
      setCount((c) => c + 1);
    }, msec);
    return () => {
      clearInterval(iid);
    };
  }, []);
}
