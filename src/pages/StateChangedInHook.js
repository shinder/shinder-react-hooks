import React from "react";
import StateChangedInHookChild from "../components/StateChangedInHookChild";

/* 結論: hook 內的 state 變更時，會造成使用該 hook 的 component re-render */
export default function StateChangedInHook() {
  console.log(`parent---`);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button className="btn btn-primary">StateChangedInHook</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <StateChangedInHookChild />
        </div>
      </div>
    </div>
  );
}
