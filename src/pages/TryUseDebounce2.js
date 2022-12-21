import { useState } from "react";
import useDebounce2 from "./../hooks/useDebounce2";

export default function TryUseDebounce() {
  const [display, setDisplay] = useState("");
  const [val, setVal] = useDebounce2(
    "",
    (v) => {
      setDisplay(v);
    },
    800
  );
  console.log({ val, display });
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Key-in</h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="account" className="form-label">
                    {display}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="account"
                    name="account"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
