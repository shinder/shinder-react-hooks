import { useState } from "react";
import NavbarElement01Navbar from "./NavbarElement01Navbar";

export default function NavbarElement01Item1() {
  const [count, setCount] = useState(1);

  return (
    <>
      <NavbarElement01Navbar barName="Inner-1" key="mySpecialKey" />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">項目一</h5>
            <p>{count}</p>
            <button
              className="btn btn-success"
              onClick={() => setCount((ov) => ov + 1)}
            >
              add one
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
