import { useState } from "react";
import LifeCycle02Child01 from "../components/LifeCycle02Child01";

export default function LifeCycle02() {
  const [show, setShow] = useState(true);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" onClick={(()=>{
            console.log(`=== 點擊 Toggle Child ===`);
            setShow(! show);
          })}>Toggle Child</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <LifeCycle02Child01 />
        </div>
      </div>
    </div>
  );
}
