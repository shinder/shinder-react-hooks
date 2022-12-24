import { Link, useLocation } from "react-router-dom";
import useSDCart from "../hooks/useSDCart";

const myStyle = {
  border: "2px solid blue",
  borderRadius: "10px",
};
export default function TryUseSDCartsNavbar() {
  const { cart } = useSDCart("ShinderCart");
  const location = useLocation();

  const path = location.pathname.split("/");
  let item = "";
  if (path.length >= 2) item = path[1];
  
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Shinder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item"
                style={item === "products" ? myStyle : null}
              >
                <Link className="nav-link" to="/products">
                  產品列表
                </Link>
              </li>
              <li
                className="nav-item"
                style={item === "cart" ? myStyle : null}
              >
                <Link className="nav-link" to="/cart">
                  購物車 <span className="badge bg-success">{cart?.length || 0}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
