import React, { useState } from 'react';
import './printer.scss';
import HeaderAdmin from '../component/headerAdmin';
import Navigation from '../pages/nav/Navigation';
import numberOfPrinter from '../images/numberOfPrinter.png';
import numberOfUser from '../images/numberOfUser.png';
import numberOfPage from '../images/numberOfPage.png';
import Printer from '../images/printer.png';

const HomePage = () => {
    const [tableData, setTableData] = useState([
        { id: 1, printer: 'PR1001', spso: 'PO001', location: 'CS1', status: 'BẬT', maintenance: '17/10/2024', power: 'TẮT' },
        { id: 2, printer: 'PR1002', spso: 'PO002', location: 'CS1', status: 'BẬT', maintenance: '17/10/2024', power: 'TẮT' },
        { id: 3, printer: 'PR2001', spso: 'PO003', location: 'CS2', status: 'BẬT', maintenance: '17/10/2024', power: 'TẮT' },
        { id: 4, printer: 'PR2002', spso: 'PO004', location: 'CS2', status: 'TẮT', maintenance: '17/10/2024', power: 'BẬT' },
        { id: 5, printer: 'PR2003', spso: 'PO005', location: 'CS2', status: 'ĐANG BẢO TRÌ', maintenance: '—', power: '—' },
    ]);
    const togglePower = (id) => {
        const updatedData = tableData.map(row =>
            row.id === id
                ? {
                    ...row,
                    power: row.power === 'BẬT' ? 'TẮT' : 'BẬT',
                    status: row.power === 'BẬT' ? 'BẬT' : 'TẮT'
                }
                : row
        );
        setTableData(updatedData);
    };

    return (
        <div className="homepage">
            <HeaderAdmin />
            <div className="layout">
                <Navigation />
                <div className="content">
                    <div className="stats-container"
                        style={{
                            marginTop: "5px"
                        }}
                    >
                        <div className="stat-card">
                            <div className="stat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3>Tổng số máy in đang hoạt động</h3>
                                <img height="50px" src={numberOfPrinter} alt="numberOfPrinter" className="stat-icon" />
                            </div>
                            <p>100</p>
                            <span>8.5% Up from last year</span>
                        </div>

                        <div className="stat-card">
                            <div className="stat-header"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between', /* Căn hai đầu */
                                    alignItems: 'center' /* Căn giữa các phần tử theo chiều dọc */
                                }}>
                                <h3>Tổng số SPSO đang làm việc</h3>
                                <img height='50px' src={numberOfUser} alt="numberOfUser" className="stat-icon" />
                            </div>
                            <p>100</p>
                            <span>8.5% Up from last month</span>
                        </div>

                        <div className="stat-card">
                            <div className="stat-header"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between', /* Căn hai đầu */
                                    alignItems: 'center' /* Căn giữa các phần tử theo chiều dọc */
                                }}>
                                <h3>Số trang in mua thêm</h3>
                                <img height='50px' src={numberOfPage} alt="numberOfPage" className="stat-icon" />
                            </div>
                            <p>12,350</p>
                            <span>8.5% Up from last month</span>
                        </div>

                        <div className="stat-card">
                            <div className="stat-header"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between', /* Căn hai đầu */
                                    alignItems: 'center' /* Căn giữa các phần tử theo chiều dọc */
                                }}>
                                <h3>Lượt in theo tháng</h3>
                                <img height='50px' src={Printer} alt="Printer" className="stat-icon" />
                            </div>
                            <p>8,253</p>
                            <span>8.5% Up from last month</span>
                        </div>
                    </div>
                    <div className="table-container"
                        style={{
                            width: 'calc(100% - 4vw)', /* Căn giữa các phần tử theo chiều dọc */
                            marginLeft: '2vw', /* Căn hai đầu */
                            padding: '10px' /* Thêm padding cho phần tử bên trong */
                        }}
                    >
                        <h3
                            style={{
                                padding: '5px 0px'
                            }}
                        >Danh sách trạng thái máy in</h3>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>MÁY IN</th>
                                    <th>SPSO</th>
                                    <th>VỊ TRÍ</th>
                                    <th>TRẠNG THÁI</th>
                                    <th>BẢO TRÌ</th>
                                    <th>CÀI ĐẶT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map(row => (
                                    <tr key={row.id}>
                                        <td>{row.printer}</td>
                                        <td>{row.spso}</td>
                                        <td>{row.location}</td>
                                        <td>{row.status}</td>
                                        <td>{row.maintenance}</td>
                                        <td>
                                            <button onClick={() => togglePower(row.id)} className="power-bttn">
                                                {row.power}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
