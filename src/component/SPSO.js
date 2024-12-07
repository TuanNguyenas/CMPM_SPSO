import React, { useState } from 'react';
import './SPSO.scss';
import HeaderAdmin from '../component/headerAdmin';
import Navigation from '../pages/nav/Navigation';
import numberOfPrinter from '../images/numberOfPrinter.png';
import numberOfUser from '../images/numberOfUser.png';
import numberOfPage from '../images/numberOfPage.png';
import Printer from '../images/printer.png';

const HomePage = () => {
    const [tableData, setTableData] = useState([
        { id: 1, spso: 'PO001', printer: 'PR1001', date: '16/11/2024', status: 'HOẠT ĐỘNG', start: '09:00 AM', end: '17:00 PM' },
        { id: 2, spso: 'PO002', printer: 'PR1002', date: '16/11/2024', status: 'HOẠT ĐỘNG', start: '09:05 AM', end: '17:05 PM' },
        { id: 3, spso: 'PO003', printer: 'PR2001', date: '16/11/2024', status: 'HOẠT ĐỘNG', start: '09:03 AM', end: '16:45 PM' },
        { id: 4, spso: 'PO004', printer: 'PR2002', date: '16/11/2024', status: 'HOẠT ĐỘNG', start: '08:59 AM', end: '17:15 PM' },
    ]);

    const deleteRow = (id) => {
        const updatedData = tableData.filter(row => row.id !== id);
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
                            marginTop: "-40px"
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
                        >Danh sách SPSO</h3>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>SPSO</th>
                                    <th>Máy in</th>
                                    <th>Ngày làm việc</th>
                                    <th>Trạng thái</th>
                                    <th>Giờ bắt đầu</th>
                                    <th>Giờ tan làm</th>
                                    <th>Cài đặt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map(row => (
                                    <tr key={row.id}>
                                        <td>{row.spso}</td>
                                        <td>{row.printer}</td>
                                        <td>{row.date}</td>
                                        <td>{row.status}</td>
                                        <td>{row.start}</td>
                                        <td>{row.end}</td>
                                        <td>
                                            <button onClick={() => deleteRow(row.id)} className="delete-bttn">XÓA</button>
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