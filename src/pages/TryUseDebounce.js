import { useEffect, useState, useCallback } from "react";
import useDebounce from "./../hooks/useDebounce";

export default function TryUseDebounce() {
  const [display, setDisplay] = useState("");
  const [val, setVal] = useState("");
  const [, setA] = useState(0);

  const debouceHandler = useCallback(() => {
    setDisplay(val);
  }, [val]);

  useDebounce(debouceHandler, 1200);
  
  // 測試 沒有使用 useCallback 時，useDebounce 的問題
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
