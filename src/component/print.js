import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "./Header";
import Footer from "./Footer";
import "./print.css";
import FileUpload from "./FileUpload";

function Print() {
  const navigate = useNavigate();

  return (
    <div className="print-page">
      <Header />
      <div className="print-content">
        <div className="print-card">
          <h1>In tài liệu</h1>
          <h3>Upload file tài liệu: <inline className="star">*</inline></h3>
          <div className="upload-box">
            <FileUpload />
          </div>
          <div className="print-form-group">
            <label>
              Chọn máy in: <input type="number" defaultValue={1} min="1" />
            </label>
            <label>
              Chọn cơ sở: <inline className="star">*</inline>
              <select>
                <option value="Di An">TP. Dĩ An</option>
                <option value="Sai Gon">TP. Hồ Chí Minh</option>
              </select>
            </label>
          </div>
          <hr />
          <h3>Cấu hình file in: <inline className="star">*</inline></h3>
          <div className="print-form-group">
            <label>
              Kích cỡ giấy: <inline className="star">*</inline>
              <select>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
                <option value="A4">A4</option>
              </select>
            </label>
            <label>
              In 1 mặt/2 mặt: <inline className="star">*</inline>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </label>
          </div>
          <div className="print-form-group">
            <label>
              Số bản copy: <inline className="star">*</inline>
              <input type="number" defaultValue={1} min="1" />
            </label>
            <label>
              Số trang/mặt: <inline className="star">*</inline>
              <input type="number" defaultValue={1} min="1" />
            </label>
          </div>
          <div className="print-form-group">
            <label>
              Trang in: <inline className="star">*</inline>
              <select>
                <option value="odd">In trang số lẻ</option>
                <option value="even">In trang số chẵn</option>
              </select>
            </label>
            <label>
              Layout: <inline className="star">*</inline>
              <select>
                <option value="landscape">Ngang</option>
                <option value="portrait">Dọc</option>
              </select>
            </label>
          </div>
          <hr />
          <div className="summary">
            Tổng cộng số trang: ...
          </div>
          <div className="button-group">
            <button className="btn-complete"
              onClick={() => navigate("/student-home")}
            >Hoàn tất</button>
            <button
              className="btn-back"
              onClick={() => navigate("/student-home")}
            >Quay lại</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Print;
