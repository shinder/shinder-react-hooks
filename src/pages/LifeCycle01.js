import React from "react";
import LifeCycle01Child01 from "./LifeCycle01Child01";

export default function LifeCycle01() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button className="btn btn-primary">Toggle Child</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <LifeCycle01Child01 />
        </div>
      </div>
    </div>
  );
}
