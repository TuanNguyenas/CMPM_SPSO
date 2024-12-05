import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../component/headerNotLoggedIn";
import Footer from "../component/Footer.js";
import "./Login.scss";

function Login() {
  const [username, setUsername] = useState(""); // Lưu tên đăng nhập
  const [password, setPassword] = useState(""); // Lưu mật khẩu
  const [error, setError] = useState(""); // Thông báo lỗi
  const navigate = useNavigate();
  const location = useLocation(); // Dùng để nhận tham số từ `App`

  const userType = location.state?.userType || "guest"; // Nhận `userType` từ state của navigate

  // Xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy logic: kiểm tra username/password theo userType
    if (
      (userType === "student" && username === "student" && password === "123456") ||
      (userType === "spso" && username === "spso" && password === "123456") ||
      (userType === "admin" && username === "admin" && password === "123456")
    ) {
      // Điều hướng về trang chính dựa trên userType
      if (userType === "student") navigate("/student-home");
      else if (userType === "spso") navigate("/spso-home");
      else if (userType === "admin") navigate("/admin-home");
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng."); // Hiển thị lỗi nếu sai thông tin
    }
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-content">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Đăng nhập</h2>
          {error && <p className="error">{error}</p>} {/* Hiển thị lỗi */}
          <div className="form-groupp">
            <label style={{color: 'black'}} htmlFor="username">Tên đăng nhập</label>
            <input
              type="text"
              id="username"
              placeholder="Nhập tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-groupp">
            <label style={{color: 'black'}} htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-login">
            Đăng nhập
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
