import { useState } from "react";
import NavbarElement01Navbar from "./NavbarElement01Navbar";

export default function NavbarElement01Item2() {
  const [count, setCount] = useState(2);

  return (
    <>
      <NavbarElement01Navbar barName="Inner-2" key="mySpecialKey" />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">項目二</h5>
            <p>{count}</p>
            <button
              className="btn btn-warning"
              onClick={() => setCount((ov) => ov + 2)}
            >
              add two
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
