import React from "react";
import HeaderSPSO from "./HeaderSPSO";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import printerButton from "../images/printer-button.png";
import historyButton from "../images/history-button.png";
import "./HistorySPSO.css";

function HistoryPrinter() {
    return (
        <div className="history-printer">
            <HeaderSPSO />
            <div className="body">
                {/* Phần tử cho logo HistoryPrinter */}
                <ul className="button-left">
                    <Link to="/HistoryPrinter">
                        <img className="button-image" src={printerButton} alt="History" />
                    </Link>
                    <p className="image-caption">Lịch sử hoạt động</p>
                </ul>

                {/* Phần tử cho logo HistoryStudent */}
                <ul className="button-right">
                    <Link to="/HistoryStudent">
                        <img className="button-image" src={historyButton} alt="History" />
                    </Link>
                    <p className="image-caption">Lịch sử in</p>
                </ul>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default HistoryPrinter;
