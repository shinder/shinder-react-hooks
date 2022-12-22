import { useState } from "react";
import LifeCycle04Child01 from "../components/LifeCycle04Child01";

export default function LifeCycle04() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => {
              console.log(`=== 點擊 Toggle Child ===`);
              setShow(!show);
            }}
          >
            LifeCycle04 Toggle Child
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              console.log(`*** 點擊 count ***`);
              setCount((v) => v + 1);
            }}
          >
            {count}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">{show && <LifeCycle04Child01 pCount={count} />}</div>
      </div>
    </div>
  );
}
