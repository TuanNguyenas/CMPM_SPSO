import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import "./Header.css";
import logo from "../images/hcmut.png";
import avatar from "../images/avatar.svg";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="header-title">HCMUT_SPSS</span>
      </div>
      <nav className="header-center">
        <Link to="/student-home">Trang chủ</Link> 
        <Link to="/print">In tài liệu</Link> 
        <Link to="/buy">Mua trang</Link>
      </nav>
      <div className="header-right">
        <div className="icon" onClick={toggleNotification}>
          🔔
        </div>
        {isNotificationOpen && (
          <div className="notification-box">
            <p>Thông báo: Bạn chưa có thông báo mới.</p>
          </div>
        )}
        <div className="avatar">
            <img src={avatar} alt="Avatar" />
        </div> 
        <div className="dropdown-arrow" onClick={toggleDropdown}>
          ▼
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/profile">Tài khoản</Link> 
            {/* <Link to="/settings">Tùy chọn</Link>  */}
            <Link to="/">Đăng xuất</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
