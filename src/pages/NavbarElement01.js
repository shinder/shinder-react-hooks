import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarElement01Navbar from "../components/NavbarElement01Navbar";
import NavbarElement01Item1 from "../components/NavbarElement01Item1";
import NavbarElement01Item2 from "../components/NavbarElement01Item2";

export default function NavbarElement01() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/item2"
          element={
            <>
              <NavbarElement01Navbar barName="Outer-2" />
              <NavbarElement01Item2 />
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <NavbarElement01Navbar barName="Outer-1" />
              <NavbarElement01Item1 />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

/* navbar 如果設定在 <Route> 的 element 屬性內且相對位置一樣，在切換路由時不會被 unmount */