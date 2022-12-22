import { useEffect, useState } from "react";

export default function LifeCycle03Child01() {
  const [count, setCount] = useState(0);
  console.log(`元件內一般敘述 A`);

  useEffect(() => {
    console.log(`useEffect 第二參數為 undefined: B OOO`);
    return () => {
      console.log(`useEffect 第二參數為 undefined: B XXX`);
    };
  });

  useEffect(() => {
    console.log(`useEffect 無相依: C OOO`);
    return () => {
      console.log(`useEffect 無相依: C XXX`);
    };
  }, []);

  useEffect(() => {
    console.log(`useEffect 相依 count : D OOO`);
    return () => {
      console.log(`useEffect 相依 count : D XXX`);
    };
  }, [count]);

  console.log(`元件內一般敘述 E`);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{count}</h5>
        <button
          className="btn btn-success"
          onClick={() => {
            console.log(`--- 點擊 add one 按鈕 ---`)
            setCount((ov) => ov + 1);
          }}
        >
          add one
        </button>
      </div>
    </div>
  );
}

/*
// *** 元件有 unmount 的情況 ***
// *** unmount 再 mount 元件內的 state 會回復初始狀況 ***

元件內一般敘述 A
元件內一般敘述 E
useEffect 第二參數為 undefined: B OOO
useEffect 無相依: C OOO
useEffect 相依 count : D OOO
--- 點擊 add one 按鈕 ---
元件內一般敘述 A
元件內一般敘述 E
useEffect 第二參數為 undefined: B XXX
useEffect 相依 count : D XXX
useEffect 第二參數為 undefined: B OOO
useEffect 相依 count : D OOO
=== 點擊 Toggle Child ===
useEffect 第二參數為 undefined: B XXX
useEffect 無相依: C XXX
useEffect 相依 count : D XXX
=== 點擊 Toggle Child ===
元件內一般敘述 A
元件內一般敘述 E
useEffect 第二參數為 undefined: B OOO
useEffect 無相依: C OOO
useEffect 相依 count : D OOO
*/