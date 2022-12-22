import { useState } from "react";
import LifeCycle03Child01 from "../components/LifeCycle03Child01";

export default function LifeCycle03() {
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
            LifeCycle03 Toggle Child
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">{show && <LifeCycle03Child01 />}</div>
      </div>
    </div>
  );
}
