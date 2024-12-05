import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import "./StudentHome.css";
import logo from "../images/hcmut.png";

const StudentHome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="landing">
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
          <span className="header-title">HCMUT_SPSS</span>
        </div>
        <nav className="header-center">
          <a href="#home">Trang chủ</a>
          <a href="#service">Dịch vụ</a>
          <a href="#contact">Liên hệ</a>
        </nav>
        <div className="header-right">
          <button href="#sign-up" className="sign-up-button" onClick={(e) => {
            e.preventDefault();
            handleLoginClick();
          }}>Đăng nhập</button>
        </div>
      </header>
      <div className="content">
        <div className="content-top">
          <div className="content-left">
            <div className="guide-box">
              <h1>Hướng dẫn sử dụng dành cho người dùng</h1>
              <p>Ứng dụng hỗ trợ sinh viên in ấn các tài liệu</p>
              <a href="#learn-more" className="learn-more-button">
                Tìm hiểu
              </a>
            </div>
          </div>
          <div className="content-right">
            <img src="/printer1.png" alt="Hình 1" className="image" />
            <img src="/printer2.png" alt="Hình 2" className="image" />
          </div>
        </div>
        <div className="content-bottom">
          <div className="brand">
            <img src="/bkpay.png" alt="Logo BKPay" className="brand-logo" />
            <span className="brand-name">BKPay</span>
          </div>
          <div className="brand">
            <img src="/hcmut.png" alt="Logo HCMUT_SSO" className="brand-logo" />
            <span className="brand-name">HCMUT_SSO</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentHome;
