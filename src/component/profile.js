import React from "react";
import Header from "./Header"; 
import Footer from "./Footer";
import "./profile.css"; 
import avatar from "../images/avatar.svg";

function Profile() {
  return (
    <div className="profile-page">
      <Header /> 
      <div className="profile-content">
        <div className="profile-title">
          <img src={avatar} alt="Avatar" className="profile-avatar" />
          <h1 className="profile-name">GOJO SATORU</h1>
        </div>

        <div className="pcontent">
  
          <div className="profile-left">
            <div className="profile-box">
              <h3>Thông tin chung</h3>
              <p><strong>Địa chỉ thư điện tử:</strong></p>
              <p>gojo.satoru@hcmut.edu.vn</p>
              <p><strong>Quốc gia:</strong></p>
              <p>Việt Nam</p>
              <p><strong>Số điện thoại:</strong></p>
              <p>0123456789</p>
              <p><strong>Nghề nghiệp:</strong></p>
              <p>Sinh viên</p>
            </div>
            <div className="profile-box">
              <h3>Lịch sử thanh toán</h3>
              <p><strong>Lần đầu thanh toán trong tháng:</strong></p>
              <p>Thứ Tư, 3 tháng 1 2024. 7:18 PM</p>
              <p><strong>Lần thanh toán gần nhất trong tháng:</strong></p>
              <p>Thứ Tư, 23 tháng 10 2024, 4:35 PM</p>
            </div>
          </div>

     
          <div className="profile-right">
            <div className="profile-box">
              <h3>Hoạt động thanh toán</h3>
              <p><strong>Lần đầu tiếp cận trang web:</strong></p>
              <p>Thứ Tư, 3 tháng 1 2024, 7:18 PM  (293 Các ngày 21 giờ)</p>
              <p><strong>Lần truy cập gần nhất vào trang:</strong></p>
              <p>Thứ Tư, 23 tháng 10 2024, 4:35 PM  (hiện thời)</p>
            </div>
            <div className="profile-box">
              <h3>Lịch sử in</h3>
              <p><strong>Lần đầu in trong tháng:</strong></p>
              <p>Thứ Tư, 3 tháng 1 2024, 7:18 PM</p>
              <p><strong>Lần in gần nhất trong tháng:</strong></p>
              <p>Thứ Tư, 23 tháng 10 2024, 4:35 PM</p>
              <a href="/history" className="profile-link">Xem thêm</a>
            </div>
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default Profile;
