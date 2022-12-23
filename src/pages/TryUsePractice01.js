import { useCallback, useState } from "react";
import usePractice01 from "../hooks/usePractice01";

export default function TryUsePractice01() {
  const [count, setCount] = useState(10);

  usePractice01(() => {
    console.log(`practice function: ${count}`);
    return () => {
      console.log(`cleanup practice function: ${count}`);
    };
  });

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{count}</h5>
          <button
            className="btn btn-success"
            onClick={() => {
              setCount((ov) => ov + 1);
            }}
          >
            add one
          </button>
        </div>
      </div>
    </div>
  );
}
