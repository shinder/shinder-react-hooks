import { useState } from "react";
import usePractice02 from "./../hooks/usePractice02";

export default function StateChangedInHookChild() {
  const [count, setCount] = useState(0);
  usePractice02(2000);
  console.log(`child ===`);
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

