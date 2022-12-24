/*
// 搭配 useSDCart 使用
*/

import React, { createContext, useReducer } from "react";

const SDCartsContext = createContext(null);
export default SDCartsContext;

const localStorageId = "sdCarts";

// 儲存到 localStorage
const saveJSON = (dataObj) => {
  const str = JSON.stringify(dataObj);
  localStorage.setItem(localStorageId, str);
  return dataObj;
};

// 判斷購物車裡是否已經有這個項目
const cartIndexOf = (cart, item) => cart.findIndex((v) => v.id === item.id);

const reducer = (state, action) => {
  let { type, payload = null } = action;
  let nState = { ...state }; // 複製
  if (!payload || !payload.cartId) {
    return state;
  }
  const cartId = payload.cartId; // cartId 用來指定使用的購物車名稱
  delete payload.cartId; // 去掉 cartId
  nState[cartId] = nState[cartId] || [];

  const cart = nState[cartId];
  let quantity = +payload.quantity || 1;
  if (quantity <= 0) quantity = 1;

  let index = cartIndexOf(cart, payload); // 取得所要變更項目的索引
  switch (type) {
    // *** 1. 加入新項目
    case "ADD_ITEM":
      if (index >= 0) {
        return state;
      }
      cart.push({ ...payload, quantity });
      return saveJSON(nState);

    // *** 2. 移除項目
    case "REMOVE_ITEM":
      if (index < 0) {
        return state;
      }
      nState[cartId] = cart.filter((v, i) => i !== index);
      return saveJSON(nState);

    // *** 3. 變更數量
    case "CHANGE_QUANTITY":
      if (index < 0) {
        return state;
      }
      nState[cartId] = cart.map((v, i) =>
        i === index ? { ...v, quantity } : v
      );
      return saveJSON(nState);

    // *** 4. 增加數量
    case "INCREASE":
      if (index < 0) {
        return state;
      }
      nState[cartId] = cart.map((v, i) =>
        i === index ? { ...v, quantity: v.quantity + 1 } : v
      );
      return saveJSON(nState);

    // *** 5. 減少數量
    case "DECREASE":
      if (index < 0) {
        return state;
      }
      nState[cartId] = cart.map((v, i) =>
        i === index && v.quantity > 1 ? { ...v, quantity: v.quantity - 1 } : v
      );
      return saveJSON(nState);

    // *** 6. 清空購物車
    case "CLEAR":
      nState[cartId] = [];
      return saveJSON(nState);

    default:
      return state;
  }
};

export function SDCartsContextProvider({ children }) {
  let initState = {};
  try {
    const str = localStorage.getItem(localStorageId) || "{}";
    initState = JSON.parse(str);
  } catch (ex) {}

  const [state, dispach] = useReducer(reducer, initState);

  return (
    <SDCartsContext.Provider
      value={{ sdCarts: state, sdCartsDispach: dispach }}
    >
      {children}
    </SDCartsContext.Provider>
  );
}
