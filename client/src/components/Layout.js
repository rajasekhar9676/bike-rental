import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Layout(props) {
  const navigate = useNavigate();

  // Get the "auth" item from localStorage
  const auth = localStorage.getItem("auth");
  let user = null;

  // Check if the auth value is not null, "null", "undefined", or an invalid JSON string
  if (auth && auth !== "undefined" && auth !== "null") {
    try {
      user = JSON.parse(auth);
    } catch (e) {
      console.error("Invalid JSON string in localStorage for key 'auth'");
    }
  }

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div>
      <div className="header navtop">
        <div className="d-flex justify-content-between">
          <Link to="/home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3148/3148937.png"
              width="50px"
              height="55px"
              alt=""
            />
          </Link>
          <Link className="text-decoration-none" to="/home">
            <h1>BiBook</h1>
          </Link>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {user?.name || "Guest"}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/home">
                Home
              </Link>
              <Link className="dropdown-item" to="/booking-list">
                Bookings
              </Link>
              <Link className="dropdown-item" to="/profile">
                Profile Page
              </Link>
              <button className="dropdown-item" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="content mt-5">{props.children}</div>
    </div>
  );
}

export default Layout;
