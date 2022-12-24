import { BrowserRouter, Routes, Route } from "react-router-dom";
import TryUseSDCartsNavbar from "../components/TryUseSDCartsNavbar";
import TryUseSDCartsProducts from "../components/TryUseSDCartsProducts";
import TryUseSDCartsCart from "../components/TryUseSDCartsCart";
import { SDCartsContextProvider } from "./../contexts/SDCartsContext";

export default function TryUseSDCarts() {
  return (
    <SDCartsContextProvider>
      <BrowserRouter>
        <TryUseSDCartsNavbar />
        <Routes>
          <Route path="/cart" element={<TryUseSDCartsCart />} />
          <Route path="/*" element={<TryUseSDCartsProducts />} />
        </Routes>
      </BrowserRouter>
    </SDCartsContextProvider>
  );
}
