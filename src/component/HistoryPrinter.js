import React, {useState} from "react";
import HeaderSPSO from "./HeaderSPSO"; 
import Footer from "./Footer"; 
import logo from "../images/printer.png"
import "./HistoryOfSPSO.css"; 

function HistoryPrinter() {
  const [searchQuery, setSearchQuery] = useState("");
  const historyData = [
    {
        campus: "Cơ sở 1",
        status: "Hoạt động",
        studentsUsed: 50,
        printerCode: "1234"
      },
      {
        campus: "Cơ sở 2",
        status: "Đang bảo trì",
        studentsUsed: 30,
        printerCode: "5678"
      },
      {
        campus: "Cơ sở 2",
        status: "Hoạt động",
        studentsUsed: 80,
        printerCode: "91011"
      },
      {
        campus: "Cơ sở 1",
        status: "Hoạt động",
        studentsUsed: 50,
        printerCode: "1234"
      },
      {
        campus: "Cơ sở 2",
        status: "Đang bảo trì",
        studentsUsed: 30,
        printerCode: "5678"
      }
  ];
  const filteredData = historyData.filter(
    (item) =>
      item.campus.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.printerCode.includes(searchQuery)
  );

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
    <div className="history-page">
      <HeaderSPSO /> 
      <div className="content">
        

        <div className="history-content">
          <div className="history-left">
            <div className="heading">Thông tin máy in</div>
            <div className="search-bar">
            <input
                type="text"
                placeholder="Tìm kiếm theo cơ sở hoặc tình trạng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {filteredData.map((item, index) => (
                <div key={index} className="item">
                  <div className="list-container">
                    <ul className="info-list">
                        <li>
                        <span className="style-bold">Cơ sở: </span>
                        <span className="style-regular">{item.campus}</span>
                        </li>
                        <li>
                        <span className="style-bold">Mã máy in: </span>
                        <span className="style-regular">{item.printerCode}</span>
                        </li>
                        <li>
                        <span className="style-bold">Tình trạng: </span>
                        <span className="style-regular">{item.status}</span>
                        </li>
                        <li>
                        <span className="style-bold">Số sinh viên sử dụng: </span>
                        <span className="style-regular">{item.studentsUsed}</span>
                        </li>
                    </ul>

                    <ul className="avatar-list">
                        <li>
                        <img src={logo} alt="Avatar" className="Avt" />
                        </li>
                    </ul>
                    </div>

                  <a href="/HistoryPrinter" className="history-link">Xem thêm</a>

                </div>
              ))}

          </div>

          <div className="history-right">
            <div>
                <div className = "heading">Báo cáo</div>
            </div>

            <div className="history-box">
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
            <div className="history-box2">
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
                <button className="buy-btn-complete">Tìm lịch sử và tạo báo cáo</button>
      </div>
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default HistoryPrinter;
