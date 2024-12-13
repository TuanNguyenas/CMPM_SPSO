import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useLocation
import Header from "./Header";
import Footer from "./Footer";
import "./buy.css";
import bkpay from "../images/bkpay.png";

function Buy() {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState(1); // State để lưu số trang
  const pricePerPage = 500; // Đơn giá mỗi trang

  // Hàm tính tổng số tiền
  const calculateTotal = () => numPages * pricePerPage;
  const [showNotification, setShowNotification] = useState(false);

  const handleComplete = () => {
    setShowNotification(true); // Hiển thị thông báo
    setTimeout(() => {
      setShowNotification(false); // Ẩn thông báo sau 3 giây
      navigate("/student-home"); // Điều hướng về trang chủ
    }, 3000);
  };

  const closeNotification = () => {
    setShowNotification(false);
    navigate("/student-home");
  };

  return (
    <div className={`buy-page ${showNotification ? 'blur' : ''}`}>      <Header />
      <div className="buy-content">
        <div className="buy-card">
          <h1>Thanh toán trang in</h1>
          <div className="buy-form-group">
            <label>
              Chọn số trang: <inline className="star">*</inline>
              <input
                type="number"
                value={numPages} // Liên kết giá trị với state
                min="1"
                onChange={(e) => setNumPages(Number(e.target.value))} // Cập nhật state khi thay đổi
              />
            </label>
          </div>
          <div className="buy-form-group">
            <label>
              Phương thức thanh toán: <inline className="star">*</inline>
              <select>
                <option value="BKPAY">BKPAY</option>
              </select>
            </label>
          </div>
          <div className="brand">
            <img src={bkpay} alt="Logo BKPay" className="brand-logo" />
            <span className="brand-name">BKPay</span>
          </div>
          <hr />
          <div className="summary">
            Tổng số tiền: {calculateTotal().toLocaleString()} vnđ
          </div>
          <div className="button-group">
            <button className="bttn-complete"
              onClick={handleComplete} // Điều hướng về trang chủ
            >Thanh Toán</button>
            <button
              className="bttn-back"
              onClick={() => navigate("/student-home")} // Điều hướng về trang chủ
            >Quay lại</button>
          </div>
        </div>
      </div>
      <Footer />
      {showNotification && (
        <div className="notification-overlay">
          <div className="notification-popup">
            <span>Xác nhận yêu cầu mua thành công</span>
            <button className="close-btn" onClick={closeNotification}>
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Buy;
