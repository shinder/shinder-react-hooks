import React, { useCallback, useEffect, useState } from "react";
import useLocalForage from "./../hooks/useLocalForage";
import useDebounce from './../hooks/useDebounce';
import useWillUnmount from './../hooks/useWillUnmount';

/* 請和 TryUseLocalForage 比較看看 */
/* 這樣的使用方式，可以直接使用 localforage，而不要使用 useLocalForage */
export default function TryUseLocalForage2() {
  const initValue = {
    account: "",
    email: "",
    readdoc: false,
  };
  const [fData, setFData, fInit] = useLocalForage('myData', initValue);
  const [data, setData] = useState(initValue);

  const fn = useCallback(()=>{
    console.log(`fn:`, data)
    setFData(data);
  }, [data, setFData]);

  useDebounce(fn, 2000);
  useWillUnmount(fn);
  
  console.log({data}); // 除錯用
  useEffect(()=>{
    if(fInit) setData({...fData})
  }, [fInit]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Personal Data</h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="account" className="form-label">
                    account
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="account"
                    name="account"
                    value={data.account}
                    onInput={(e) =>
                      setData({ ...data, account: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="readdoc"
                    name="readdoc"
                    checked={data.readdoc}
                    onChange={(e) =>
                      setData({ ...data, readdoc: e.target.checked })
                    }
                  />
                  <label className="form-check-label" htmlFor="readdoc">
                    already read docs
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
