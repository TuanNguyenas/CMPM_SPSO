import React from "react";
import HeaderSPSO from "./HeaderSPSO";
import Footer from "./Footer";
import "./profileSPSO.css";
import logo from "../images/logo_BK1.png"

function profileSPSO() {
  return (
    <div className="profileSPSO-page">
      <HeaderSPSO />
      <div className="profileSPSO-content">
        <div className="profileSPSO-title">
          <img style={{ width: "10%", marginLeft: "500px" }}
            src={logo} alt="Avatar" />
          <h1 className="profileSPSO-name">GOJO SATORU</h1>
        </div>

        <div className="pSPSOcontent">

          <div className="profileSPSO-left">
            <div className="profileSPSO-box">
              <h3>Thông tin chung</h3>
              <p><strong>Họ và tên:</strong>  GOJO SATORU</p>
              <p><strong>Giới tính:</strong>  Nam</p>
              <p><strong>Ngày sinh:</strong>  01/02/1999</p>
              <p><strong>Địa chỉ thư điện tử:</strong>  gojo.satoru@hcmut.edu.vn</p>
              <p><strong>Quốc gia:</strong>  Việt Nam</p>
              <p><strong>Số điện thoại:</strong>  0123456789</p>
              <p><strong>Nghề nghiệp:</strong>  SPSO</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default profileSPSO;
