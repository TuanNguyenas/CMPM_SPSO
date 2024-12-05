import React from "react";
import "./Report.css";

const Report = () => {
  const data = {
    startDate: "Thứ Tư, 3 tháng 1 2024",
    endDate: "Thứ Tư, 3 tháng 1 2024",
    uploadedFiles: 100,
    campus: "Cả hai",
    studentsPrinted: 105,
    paperTypes: {
      A0: 10,
      A1: 3,
      A2: 3,
      A3: 3,
      A4: 20,
      A5: 1
    }
  };
  return (

    <div className="report">
      <div className="heading">Báo Cáo</div>
      <div className="info">
        <span className="style-bold">Ngày bắt đầu: </span>
        <span className="style-regular">{data.startDate}</span> <br />
        <span className="style-bold">Ngày kết thúc: </span>
        <span className="style-regular">{data.endDate}</span> <br />
        <span className="style-bold">Số file đã upload: </span>
        <span className="style-regular">{data.uploadedFiles}</span> <br />
        <span className="style-bold">Cơ sở: </span>
        <span className="style-regular">{data.campus}</span> <br />
        <span className="style-bold">Số lượng sinh viên đã in: </span>
        <span className="style-regular">{data.studentsPrinted}</span> <br />
        <span className="style-bold">Các loại giấy đã sử dụng:</span> <br />
        <div className="list-container">
          <ul>
            <li>
              <span className="style-bold">A0: </span>
              <span className="style-regular">{data.paperTypes.A0}</span>
            </li>
            <li>
              <span className="style-bold">A1: </span>
              <span className="style-regular">{data.paperTypes.A1}</span>
            </li>
            <li>
              <span className="style-bold">A2: </span>
              <span className="style-regular">{data.paperTypes.A2}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="style-bold">A3: </span>
              <span className="style-regular">{data.paperTypes.A3}</span>
            </li>
            <li>
              <span className="style-bold">A4: </span>
              <span className="style-regular">{data.paperTypes.A4}</span>
            </li>
            <li>
              <span className="style-bold">A5: </span>
              <span className="style-regular">{data.paperTypes.A5}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="report-filter">
        <div className = "input-group">
          <span className="style-lable"><label>Chọn ngày bắt đầu:</label></span>
          <span className="style-input"><input type="date" /></span> <br />
        </div>
        
        <div className = "input-group">
          <span className="style-lable"><label>Chọn ngày kết thúc:</label></span>
          <span className="style-input"><input type="date" /></span> <br />
        </div>
        <div className = "input-group">
          <span className="style-lable"><label>Chọn cơ sở:</label></span>
          <span className="style-input">
            <select>
              <option value="ca-hai">Cả hai</option>
              <option value="co-so-1">Cơ sở 1</option>
              <option value="co-so-2">Cơ sở 2</option>
            </select>
          </span> <br />
        </div>
        <button className="button-submit">Tìm lịch sử và tạo báo cáo</button>
      </div>
    </div>
  );
};

export default Report;
