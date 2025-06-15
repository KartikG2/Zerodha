import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useNavigate,Link} from "react-router-dom";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import { toast } from "react-toastify";


const Menu = () => {
  const [selectedMenu, setselectedMenu] = useState(0);
  const [isProfileDropDown, setisProfileDropDown] = useState(false);

  const handleMenuClick = (index) => {
    setselectedMenu(index);
  };
  const handleProfileClick = (index) => {
    setisProfileDropDown(!isProfileDropDown);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  // const navigate = useNavigate();
  // const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     if (!cookies.token) {
  //       navigate("/login");
  //       return;
  //     }

  //     try {
  //       const { data } = await axios.post(
  //         "http://localhost:8000/verify",
  //         {},
  //         { withCredentials: true }
  //       );
  //       const { status, user } = data;

  //       if (status) {
  //         setUsername(user);
  //         toast.success(`Hello ${user}`, { position: "top-right" });
  //       } else {
  //         removeCookie("token");
  //         navigate("/login");
  //       }
  //     } catch (error) {
  //       removeCookie("token");
  //       navigate("/login");
  //       toast.error("Session expired or server error", { position: "top-right" });
  //     }
  //   };

  //   verifyCookie();
  // }, [cookies, navigate, removeCookie]);

  // const Logout = () => {
  //   removeCookie("token");
  //   toast.info("Logged out", { position: "top-right" });
  //   navigate("/login");
  // };

  return (
    <div className="menu-container">
      <img src="./download.png" style={{ width: "25px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass: menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu ===1? activeMenuClass: menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass: menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3? activeMenuClass: menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu ===4? activeMenuClass: menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu ===5? activeMenuClass: menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{username[0]}p</div>
          <button className="logout" ><i className="fa-solid fa-right-from-bracket"></i></button>
        </div>
      </div>
    </div>

  );
};

export default Menu;
