import React from "react";
import useLocalStorageJson from "./../hooks/useLocalStorageJson";

export default function TryUseLocalStorageJson() {
  const [data, setData] = useLocalStorageJson("myData", {
    account: "",
    email: "",
    readdoc: false,
  });

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
                    onChange={(e) =>
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
