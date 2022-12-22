import { useEffect, useState } from "react";

export default function LifeCycle04Child01({pCount}) {
  const [count, setCount] = useState(0);

  console.log(`元件內一般敘述, pCount: ${pCount}`);
  useEffect(() => {
    console.log(`useEffect 第二參數為 undefined OOO, pCount: ${pCount}`);
    return () => {
      console.log(`useEffect 第二參數為 undefined XXX, pCount: ${pCount}`);
    };
  });

  useEffect(() => {
    console.log(`useEffect 無相依 OOO, pCount: ${pCount}`);
    return () => {
      console.log(`useEffect 無相依 XXX, pCount: ${pCount}`);
    };
  }, []);

  useEffect(() => {
    console.log(`useEffect 相依 pCount OOO, pCount: ${pCount}`);
    return () => {
      console.log(`useEffect 相依 pCount XXX, pCount: ${pCount}`);
    };
  }, [pCount]);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{count}</h5>
        <button
          className="btn btn-success"
          onClick={() => {
            console.log(`--- 點擊 add one 按鈕 ---`);
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
// 1. props 變更時，重新 render
// 2. cleanup function 會在一般敘述執行完之後
// 3. useEffect 無相依 的 cleanup function 裡面使用 props 時，會保有 mount 時 props 的值。

元件內一般敘述, pCount: 0
useEffect 第二參數為 undefined OOO, pCount: 0
useEffect 無相依 OOO, pCount: 0
useEffect 相依 pCount OOO, pCount: 0
*** 點擊 count ***
元件內一般敘述, pCount: 1
useEffect 第二參數為 undefined XXX, pCount: 0
useEffect 相依 pCount XXX, pCount: 0
useEffect 第二參數為 undefined OOO, pCount: 1
useEffect 相依 pCount OOO, pCount: 1
*** 點擊 count ***
元件內一般敘述, pCount: 2
useEffect 第二參數為 undefined XXX, pCount: 1
useEffect 相依 pCount XXX, pCount: 1
useEffect 第二參數為 undefined OOO, pCount: 2
useEffect 相依 pCount OOO, pCount: 2
=== 點擊 Toggle Child ===
useEffect 第二參數為 undefined XXX, pCount: 2
useEffect 無相依 XXX, pCount: 0                  <------
useEffect 相依 pCount XXX, pCount: 2
=== 點擊 Toggle Child ===
元件內一般敘述, pCount: 2
useEffect 第二參數為 undefined OOO, pCount: 2
useEffect 無相依 OOO, pCount: 2
useEffect 相依 pCount OOO, pCount: 2
*/
