import React from "react";
import useSDCart from "../hooks/useSDCart";

export default function TryUseSDCartsCart() {
  const { cart, removeItem, changeQuantity } = useSDCart("ShinderCart");

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">購物車</h5>
          {!cart || !cart.length ? (
            <div className="alert alert-secondary" role="alert">
              購物車內沒有商品
            </div>
          ) : (
            <>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">刪除</th>
                    <th scope="col">#</th>
                    <th scope="col">書名</th>
                    <th scope="col">作者</th>
                    <th scope="col">價格</th>
                    <th scope="col">數量</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeItem(p)}
                        >
                          刪
                        </button>
                      </td>
                      <td>{p.id}</td>
                      <td>{p.bookname}</td>
                      <td>{p.author}</td>
                      <td>{p.price}</td>
                      <td>
                        <input
                        className="form-control"
                          type="number"
                          value={p.quantity}
                          onChange={(e) =>
                            changeQuantity({ ...p, quantity: e.target.value })
                          }
                        />
                      </td>
                      <td>{p.quantity * p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="alert alert-success" role="alert">
                總計: {cart.reduce((a, v) => a + v.price * v.quantity, 0)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
