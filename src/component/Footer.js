import React from "react";
import "./Footer.css";
import hcmutLogo from '../images/hcmut.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-title">
            <img src={hcmutLogo} alt="Logo" className="footer-logo" />
            <span className="footer-title">HCMUT_SPSS</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p><strong>Student Printing Service Officer</strong></p>
        <p>
          Bất cứ trục trặc kỹ thuật liên quan đến in ấn hoặc thanh toán trang in.
          Sinh viên liên lạc:
        </p>
        <p>Email: xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>ĐT (Tel.): xxxxxxxxxxxxxxxx</p>
      </div>
    </footer>
  );
}

export default Footer;
