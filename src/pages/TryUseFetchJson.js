import React from "react";
import useFetchJson from "./../hooks/useFetchJson";

export default function TryUseLocalStorageJson() {
  const [data, loading, error] = useFetchJson("/data/people1.json");
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          {loading ? (
            <div className="alert alert-primary" role="alert">
              載入中...
            </div>
          ) : error ? (
            <div className="alert alert-primary" role="alert">
              發生錯誤: {error.message}
            </div>
          ) : data && data.length ? (
            <>
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">員工編號</th>
                    <th scope="col">姓名</th>
                    <th scope="col">年齡</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el) => (
                    <tr key={el.id}>
                      <td>{el.id}</td>
                      <td>{el.name}</td>
                      <td>{el.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
