import React, { useEffect, useRef, useState } from "react";

export default function PreviousState() {
  const [count, setCount] = useState(0);
  const cRef = useRef(null);
  const ccRef = useRef();
  const dRef = useRef(null);
  const ddRef = useRef(null);

  console.log(`general: ${count}`);

  useEffect(() => {
    console.log(`effect: ${count}`);
    cRef.current = count;
    if (ccRef.current)
      ccRef.current.innerHTML = `即時 cRef.current: ${cRef.current}`;
    return () => {
      dRef.current = count;
      if (ddRef.current)
        ddRef.current.innerHTML = `即時 dRef.current: ${dRef.current}`;
      console.log(`cancel effect: ${count}`);
    };
  }, [count]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">count: {count}</h5>
          <p>{console.log(`rendering:`, count, cRef.current, dRef.current)}</p>
          <p>render 時 cRef.current: {cRef.current}</p>
          <p>render 時 dRef.current: {dRef.current}</p>
          <p ref={ccRef}>即時 cRef.current: {cRef.current}</p>
          <p ref={ddRef}>即時 dRef.current: {dRef.current}</p>

          <button
            className="btn btn-success"
            onClick={() => {
              setCount((ov) => {
                console.log(`------ trigger setCount: old value: ${ov}`);
                return ov + 1;
              });
            }}
          >
            add one
          </button>
        </div>
      </div>
    </div>
  );
}

/*
// 此例子最重要的是 render 和 effect function 的執行順序
// 先 render 再呼叫 effect function

// 執行後按一次按鈕的結果，但當下 cRef 為 1，dRef 為 0。
general: 0
rendering: 0 null null
effect: 0
------ trigger setCount: old value: 0
general: 1
rendering: 1 0 null
cancel effect: 0
effect: 1
*/
