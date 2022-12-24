import { useContext } from "react";
import SDCartsContext from "./../contexts/SDCartsContext";

/* shinder: 2022-12-24 */
// 要搭配 SDCartsContext 使用

export default function useSDCart(cartId = "cart0") {
  const { sdCarts, sdCartsDispach } = useContext(SDCartsContext);

  const addItem = (item = {}) => {
    sdCartsDispach({
      type: "ADD_ITEM",
      payload: { ...item, cartId },
    });
  };

  const removeItem = (item = {}) => {
    sdCartsDispach({
      type: "REMOVE_ITEM",
      payload: { ...item, cartId },
    });
  };

  const changeQuantity = (item = {}) => {
    sdCartsDispach({
      type: "CHANGE_QUANTITY",
      payload: { ...item, cartId },
    });
  };

  const increase = (item = {}) => {
    sdCartsDispach({
      type: "INCREASE",
      payload: { ...item, cartId },
    });
  };

  const decrease = (item = {}) => {
    sdCartsDispach({
      type: "DECREASE",
      payload: { ...item, cartId },
    });
  };

  const clear = () => {
    sdCartsDispach({
      type: "CLEAR",
      payload: { cartId },
    });
  };

  return {
    cart: sdCarts[cartId],
    addItem,
    removeItem,
    changeQuantity,
    increase,
    decrease,
    clear,
  };
}
