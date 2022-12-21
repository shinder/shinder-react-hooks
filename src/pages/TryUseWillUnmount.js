import { useEffect, useState, useCallback } from "react";
import useDebounce from "./../hooks/useDebounce";
import useWillUnmount from "./../hooks/useWillUnmount";
import useLocalStorageJson from "./../hooks/useLocalStorageJson";

export default function TryUseWillUnmount() {
  const [display, setDisplay] = useLocalStorageJson("TryUseWillUnmount", '')
  const [val, setVal] = useState(display);

  const debouceHandler = useCallback(() => {
    console.log({val})
    setDisplay(val);
  }, [val]);

  useDebounce(debouceHandler, 2000);
  useWillUnmount(debouceHandler);
  
  console.log({ val, display });
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">TryUseWillUnmount</h5>
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
