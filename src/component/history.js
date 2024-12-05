import React from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 
import "./history.css"; 

function History() {
  return (
    <div className="history-page">
      <Header /> 
      <div className="content">
        

        <div className="history-content">
          <div className="history-left">
            <div >
                <h1>Lịch sử thanh toán</h1>
            </div>
            <div className="history-box">
              <p><strong>Ngày thực hiện:</strong> Thứ Tư, 3 tháng 1 2024, 7:18 PM </p>
              <p><strong>Số trang đã thanh toán:</strong> 10 </p>
              <p><strong>ID:</strong> #1234</p>
              {/* <a href="/history" className="history-link">Xem thêm</a> */}
            </div>
            <div className="history-box">
              <p><strong>Ngày thực hiện:</strong> Thứ Tư, 3 tháng 1 2024, 7:18 PM </p>
              <p><strong>Số trang đã thanh toán:</strong> 10 </p>
              <p><strong>ID:</strong> #1234</p>
              {/* <a href="/history" className="history-link">Xem thêm</a> */}
            </div>
            <div className="history-box">
              <p><strong>Ngày thực hiện:</strong> Thứ Tư, 3 tháng 1 2024, 7:18 PM </p>
              <p><strong>Số trang đã thanh toán:</strong> 10 </p>
              <p><strong>ID:</strong> #1234</p>
              {/* <a href="/history" className="history-link">Xem thêm</a> */}
            </div>
            <div className="history-box">
              <p><strong>Ngày thực hiện:</strong> Thứ Tư, 3 tháng 1 2024, 7:18 PM </p>
              <p><strong>Số trang đã thanh toán:</strong> 10 </p>
              <p><strong>ID:</strong> #1234</p>
              {/* <a href="/history" className="history-link">Xem thêm</a> */}
            </div>
            <div className="history-box">
              <p><strong>Ngày thực hiện:</strong> Thứ Tư, 3 tháng 1 2024, 7:18 PM </p>
              <p><strong>Số trang đã thanh toán:</strong> 10 </p>
              <p><strong>ID:</strong> #1234</p>
              {/* <a href="/history" className="history-link">Xem thêm</a> */}
            </div>
          </div>

          <div className="history-right">
            <div>
                <h1>Báo cáo</h1>
            </div>

            <div className="history-box">
              <p><strong>Ngày bắt đầu:</strong> Thứ Tư, 3 tháng 1 2024</p>
              <p><strong>Ngày kết thúc:</strong> Thứ Tư, 3 tháng 1 2024</p>
              <p><strong>Số trang đã thanh toán:</strong> 10 </p>
            </div>
            <div className="history-box2">
                <label>
                    <strong>Chọn ngày bắt đầu: </strong>
                    <input type="date" defaultValue="2024-01-01" />
                </label>
                <label>
                    <strong>Chọn ngày kết thúc: `</strong>
                    <input type="date" defaultValue="2024-01-01" />
                </label>
                <button className="buy-btn-complete">Tìm lịch sử và tạo báo cáo</button>
            </div>
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default History;
