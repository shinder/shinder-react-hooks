import React from "react";
import { products1 } from "./../data/products1";
import useSDCart from "../hooks/useSDCart";

export default function TryUseSDCartsProducts() {
  const { addItem } = useSDCart("ShinderCart");

  const addToCart = (id) => {
    const item = products1.find((el) => el.id === id);
    addItem(item);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">商品列表</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">書名</th>
                <th scope="col">作者</th>
                <th scope="col">價格</th>
                <th scope="col">加到購物件</th>
              </tr>
            </thead>
            <tbody>
              {products1.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.bookname}</td>
                  <td>{p.author}</td>
                  <td>{p.price}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => addToCart(p.id)}
                    >
                      加到購物件
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
