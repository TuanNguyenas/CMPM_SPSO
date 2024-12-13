import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useLocation
import HeaderSPSO from "./HeaderSPSO";
import Footer from "./Footer";
import "./ConfigSPSO.css";

function ConfigSPSO() {
    const supplyPages = Array.from({ length: 24 }, (_, i) => i + 1);
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false);

    const handleComplete = () => {
        setShowNotification(true); // Hiển thị thông báo
        setTimeout(() => {
            setShowNotification(false); // Ẩn thông báo sau 3 giây
            navigate("/spso-home"); // Điều hướng về trang chủ
        }, 300000);
    };

    const closeNotification = () => {
        setShowNotification(false);
        navigate("/spso-home");
    };
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

    return (
        <div className={`history-page ${showNotification ? "blur" : ""}`}>
            <HeaderSPSO />
            <div className="subbody">
                <div className="container">
                    <h2>Các cấu hình in</h2>
                    <div className="content"
                        style={{ marginLeft: '0vw', padding: '0px', width: 'calc(100% - -1vw)', overflowY: 'auto' }}>
                        <ul className="button-left">
                        </ul>
                        <ul className="button-right">
                            <div className="form-section">
                                <div className="form-group">
                                    <label style={{ color: 'black' }} htmlFor="date">Chọn ngày, tháng và năm cung cấp trang:</label>
                                    <input type="date" id="date" />
                                </div>
                                <div className="form-group">
                                    <label style={{ color: 'black' }} htmlFor="quantity">Chọn số lượng trang mặc định:</label>
                                    <input type="number" defaultValue={1} min="1" />
                                </div>
                                <div className="form-group">
                                    <label style={{ color: 'black' }} htmlFor="file-types">Chọn loại tệp tin:</label>
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
                                    onClick={handleComplete}
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
            {showNotification && (
                <div className="notification-overlay">
                    <div className="notification-popup">
                        <span>Xác nhận cấu hình trang in thành công</span>
                        <button className="close-btn" onClick={closeNotification}>
                            x
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ConfigSPSO;
