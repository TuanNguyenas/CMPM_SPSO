import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import logo from "./images/hcmut.png";
import Login from "./pages/Login.js";
import StudentHome from "./pages/StudentHome";
import AdminHome from "./pages/AdminHome";

//Import Student
import StudentLogin from "./pages/StudentLogin";
import Print from "./component/print";
import Buy from "./component/buy";
import Profile from "./component/profile";
import History from "./component/history";

//Import SPSO Student
import SPSOHome from "./pages/SPSOHome";
import HistoryOfSPSO from "./component/HistoryOfSPSO";
import HistoryPrinter from "./component/HistoryPrinter";
import ProfileSPSO from "./component/profileSPSO";
import HistorySPSO from "./component/HistorySPSO";
import ConfigSPSO from "./component/ConfigSPSO";

//Import Admin
import SPSO from './component/SPSO';
import Printer from './component/printer';
import Notification from './component/notification';

function App() {
  const navigate = useNavigate();

  // Xử lý khi chọn loại tài khoản
  const handleLoginType = (type) => {
    navigate("/login", { state: { userType: type } }); // Chuyển hướng đến login với userType
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="navbar">
        <div className="logo" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <img src={logo} alt="Logo" />
          <label style={{ color: "white", fontSize: "24px", fontWeight: "bold", marginLeft: "10px" }}>HCMUT_SPSS</label>
        </div>
        <nav>
          <ul className="nav-links">
            <li>Trang chủ</li>
            <li>Dịch vụ</li>
            <li>Liên hệ</li>
          </ul>
        </nav>
        <div className="language-options">
          <label style={{ color: "#0078b3", fontSize: "24px", fontWeight: "bold", marginLeft: "10px", marginRight: "40px" }}>
            HCMUT_SPSS
          </label>
        </div>
      </header>

      {/* Main Content */}
      <main className="login-section">
        <div className="login-card">
          <img src={logo} alt="BK Logo" className="logo-large" />
          <h2>Đăng nhập bằng tài khoản:</h2>
          <div className="login-options">
            <button className="login-option" onClick={() => handleLoginType("student")}>
              Sinh viên
            </button>
            <button className="login-option" onClick={() => handleLoginType("spso")}>
              SPSO
            </button>
            <button className="login-option" onClick={() => handleLoginType("admin")}>
              Quản trị viên
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Trang chính */}
        <Route path="/login" element={<Login />} /> {/* Trang login */}

        {/* Sinh viên */}
        <Route path="/student-home" element={<StudentLogin />} />
        <Route path="/print" element={<Print />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/" element={<Login />} />

        {/* SPSO */}
        <Route path="/spso-home" element={<SPSOHome />} />
        <Route path="/historyStudent" element={<HistoryOfSPSO />} />
        <Route path="/profileSPSO" element={<ProfileSPSO />} />
        <Route path="/historyPrinter" element={<HistoryPrinter />} />
        <Route path="/historySPSO" element={<HistorySPSO />} />
        <Route path="/configSPSO" element={<ConfigSPSO />} />

        {/* Admin */}
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/printer" element={<Printer />} />
        <Route path="/SPSO" element={<SPSO />} />
        <Route path="/notification" element={<Notification />} />\
      </Routes>
    </Router>
  );
}
