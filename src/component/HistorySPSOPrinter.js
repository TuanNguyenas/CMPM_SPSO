import React, { useState } from "react";
import HeaderSPSO from "./HeaderSPSO";
import Footer from "./Footer";
import logo from "../images/printer.png";
import "./HistoryPrinter.css";

function HistorySPSOPrinter() {
    const [searchQuery, setSearchQuery] = useState("");
    const [printerStatus, setPrinterStatus] = useState([true, false, true, true, false]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reportGenerated, setReportGenerated] = useState(false);

    const historyData = [
        {
            campus: "Cơ sở 1",
            status: "Hôm nay",
            studentsUsed: 50,
            printerCode: "08122024"
        },
        {
            campus: "Cơ sở 1",
            status: "Bảo trì",
            studentsUsed: 0,
            printerCode: "07122024"
        },
        {
            campus: "Cơ sở 1",
            status: "Hoạt động",
            studentsUsed: 80,
            printerCode: "06122024"
        },
        {
            campus: "Cơ sở 1",
            status: "Hoạt động",
            studentsUsed: 50,
            printerCode: "05122024"
        },
        {
            campus: "Cơ sở 1",
            status: "Bảo trì",
            studentsUsed: 0,
            printerCode: "04122024"
        }
    ];

    const toggleStatus = (index) => {
        const newStatus = [...printerStatus];
        newStatus[index] = !newStatus[index];
        setPrinterStatus(newStatus);
    };

    const handleGenerateReport = () => {
        if (startDate && endDate) {
            setReportGenerated(true);
        } else {
            alert("Vui lòng chọn đầy đủ ngày bắt đầu và ngày kết thúc!");
        }
    };

    const filteredData = historyData.filter(
        (item) =>
            item.campus.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.printerCode.includes(searchQuery)
    );

    return (
        <div className="history-page">
            <HeaderSPSO />
            <div className="Printercontent">
                <div className="PrinterHistory-content">
                    <div className="history-left">
                        <div className="heading" style={{ fontSize: '35px' }}>Thông tin máy in</div>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Tìm kiếm theo cơ sở hoặc mã máy in..."
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
                                            {item.status === "Hôm nay" ? (
                                                <button
                                                    className={`status-btn ${printerStatus[index] ? 'active' : 'inactive'}`}
                                                    onClick={() => toggleStatus(index)}
                                                >
                                                    {printerStatus[index] ? "Bật" : "Tắt"}
                                                </button>
                                            ) : (
                                                <span className="style-regular">{item.status}</span>
                                            )}
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

                                <a href="/HistorySPSOPrinter" className="history-link">Xem thêm</a>
                            </div>
                        ))}
                    </div>

                    <div className="history-right">
                        <div>
                            <div className="heading" style={{ fontSize: '35px' }}>Báo cáo</div>
                        </div>

                        <div className="history-box">
                            <span className="style-bold">Ngày bắt đầu: </span>
                            <span className="style-regular">{startDate || "Chưa chọn"}</span> <br />
                            <span className="style-bold">Ngày kết thúc: </span>
                            <span className="style-regular">{endDate || "Chưa chọn"}</span> <br />
                            {reportGenerated ? (
                                <>
                                    <span className="style-bold">Số file đã upload: </span>
                                    <span className="style-regular">100</span> <br />
                                    <span className="style-bold">Mã máy in: </span>
                                    <span className="style-regular">HCMUT2-001</span> <br />
                                    <span className="style-bold">Số lượng sinh viên đã in: </span>
                                    <span className="style-regular">105</span> <br />
                                    <span className="style-bold">Các loại giấy đã sử dụng:</span> <br />
                                    <div className="list-container">
                                        <ul>
                                            <li>
                                                <span className="style-bold">A0: </span>
                                                <span className="style-regular">10</span>
                                            </li>
                                            <li>
                                                <span className="style-bold">A1: </span>
                                                <span className="style-regular">3</span>
                                            </li>
                                            <li>
                                                <span className="style-bold">A2: </span>
                                                <span className="style-regular">3</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <span className="style-bold">A3: </span>
                                                <span className="style-regular">3</span>
                                            </li>
                                            <li>
                                                <span className="style-bold">A4: </span>
                                                <span className="style-regular">20</span>
                                            </li>
                                            <li>
                                                <span className="style-bold">A5: </span>
                                                <span className="style-regular">1</span>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <span className="style-bold">Số file đã upload: </span>
                                    <span className="style-regular">--</span> <br />
                                    <span className="style-bold">Mã máy in: </span>
                                    <span className="style-regular">HCMUT2-001</span> <br />
                                    <span className="style-bold">Số lượng sinh viên đã in: </span>
                                    <span className="style-regular">--</span> <br />
                                    <span className="style-bold">Các loại giấy đã sử dụng:</span> <br />
                                    <div className="list-container">
                                        <ul>
                                            <li><span className="style-regular">--</span></li>
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="history-box2">
                            <div className="input-group">
                                <span className="style-lable"><label>Chọn ngày bắt đầu:</label></span>
                                <span className="style-input">
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </span> <br />
                            </div>

                            <div className="input-group">
                                <span className="style-lable"><label>Chọn ngày kết thúc:</label></span>
                                <span className="style-input">
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </span> <br />
                            </div>
                            <div className="input-group">
                                <span className="style-lable"><label>Mã máy in:  HCMUT2-001</label></span>
                            </div>
                            <button className="buy-btn-complete" onClick={handleGenerateReport}>
                                Tìm lịch sử và tạo báo cáo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HistorySPSOPrinter;
