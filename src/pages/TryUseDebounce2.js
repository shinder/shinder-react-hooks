import { useState, useEffect, useCallback } from "react";
import useDebounce2 from "./../hooks/useDebounce2";

export default function TryUseDebounce2() {
  const [display, setDisplay] = useState("");
  const [a, setA] = useState(0);

  const debouceHandler = useCallback((v) => {
    setDisplay(v);
  }, []);
  const [val, setVal] = useDebounce2("", debouceHandler, 800);

  // 測試 沒有使用 useCallback 時，useDebounce2 的問題
  useEffect(() => {
    const intervalId = setInterval(() => {
      setA((v) => v + 1);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  console.log({ val, display });
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">TryUseDebounce2</h5>
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
