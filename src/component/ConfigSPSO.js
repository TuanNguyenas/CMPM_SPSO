import React, { useState } from "react";
import HeaderSPSO from "./HeaderSPSO";
import Footer from "./Footer";
import "./ConfigSPSO.css";

function ConfigSPSO() {
    const supplyDates = Array.from({ length: 24 }, (_, i) => i + 1);
    const supplyPages = Array.from({ length: 24 }, (_, i) => i + 1);
    const fileTypes = [
        "PDF",
        "DOC",
        "DOCX",
        "TXT",
        "JPEG",
        "JPG",
        "PNG",
        "XLS",
        "XLSX",
    ];

    const [studentId, setStudentId] = useState("");

    const handleConfirm = () => {
        alert(`Mã số sinh viên của bạn là: ${studentId}`);
    };

    return (
        <div className="history-page">
            <HeaderSPSO />
            <div className="subbody">
                <div className="container">
                    <h2>Các cấu hình in</h2>
                    <div className="content">
                        <ul className="button-left">
                        </ul>
                        <ul className="button-right">
                            <div className="form-section">
                                <div className="form-group">
                                    <label style={{color: 'black'}} htmlFor="date">Chọn ngày cung cấp trang:</label>
                                    <select id="date">
                                        {supplyDates.map((supplyDate) => (
                                            <option key={supplyDate} value={supplyDate}>
                                                {supplyDate}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label style={{color: 'black'}} htmlFor="quantity">Chọn số lượng trang mặc định:</label>
                                    <input type="number" defaultValue={1} min="1" />
                                </div>
                                <div className="form-group">
                                    <label style={{color: 'black'}} htmlFor="file-types">Chọn loại tệp tin:</label>
                                    <select id="file-types">
                                        {fileTypes.map((fileType) => (
                                            <option key={fileType} value={fileType}>
                                                {fileType}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group" style={{ textAlign: "center", marginTop: "20px" }}>
                                <button
                                    className="confirm-button"
                                    onClick={handleConfirm}
                                    style={{
                                        backgroundColor: "#28a745",
                                        color: "#fff",
                                        padding: "10px 20px",
                                        fontSize: "16px",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Xác nhận
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ConfigSPSO;
