import { useRef } from "react";

/* shinder: 2022-12-23 這是個測試 closure 的例子 */
// 這個例子是讓每個 fn 在一秒後執行，並在接下來的一秒執行其 cleanup

export default function usePractice01(fn) {
  const ref = useRef([]);
  const v1 = "hook variable";

  setTimeout(() => {
    console.log(1, v1);
    ref.current.push(fn());
    setTimeout(() => {
      console.log(2, v1);
      ref.current.shift()();
    }, 1000);
  }, 1000);
}
