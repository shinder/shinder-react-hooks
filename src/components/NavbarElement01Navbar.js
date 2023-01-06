import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const myStyle = {
  border: "2px solid red",
};
export default function NavbarElement01Navbar({barName=null}) {
  const location = useLocation();
  const path = location.pathname.split("/");
  let item = "";
  if (path.length >= 2) item = path[1];
  useEffect(() => {
    console.log(`${barName} is mounted OOO`);
    return () => {
      console.log(`${barName} will unmount XXX`);
    };
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#/">
            {barName}
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
                style={item === "item1" ? myStyle : null}
              >
                <Link className="nav-link" to="/item1">
                  項目一
                </Link>
              </li>
              <li
                className="nav-item"
                style={item === "item2" ? myStyle : null}
              >
                <Link className="nav-link" to="/item2">
                  項目二
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
