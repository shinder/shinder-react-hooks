import { useEffect, useLayoutEffect, useState } from "react";

export default function LifeCycle05Child01() {
  const [count, setCount] = useState(0);
  console.log(`元件內一般敘述`);


  useEffect(() => {
    console.log(`effect`);
    return () => {
      console.log(`cleanup effect`);
    };
  }, []);

  useLayoutEffect(() => {
    console.log(`layout effect`);
    return () => {
      console.log(`cleanup layout effect`);
    };
  }, []);


  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{count}</h5>
        <p>{console.log(`render`)}</p>
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
// *** useEffect() 和 useLayoutEffect() 的差異  ***

元件內一般敘述
render
layout effect
effect
=== 點擊 Toggle Child ===
cleanup layout effect
cleanup effect
*/
