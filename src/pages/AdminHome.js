import React from 'react';
import './AdminHome.scss';
// import { Menu, MenuItem, IconButton } from '@mui/material';
import HeaderAdmin from '../component/headerAdmin';
import Navigation from './nav/Navigation';
import { useState } from 'react';
import numberOfPrinter from '../images/numberOfPrinter.png'
import numberOfUser from '../images/numberOfUser.png'
import numberOfPage from '../images/numberOfPage.png'
import Printer from '../images/printer.png'
import thongKeLuotInThang12 from '../images/thongKeLuotInThang12.png'
import thongKeLuotInTheoQuy from '../images/thongKeLuotInTheoQuy.png'
import threeDotsIcon from '../images/3dots.png';

const AdminHome = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="homepage">
            {/* Header */}
            <HeaderAdmin />
            {/* Layout chính */}
            <div className="layout">
                {/* Sidebar */}
                <Navigation />

                {/* Nội dung chính */}
                <div className="content"
                // style={{
                //     marginTop: '70px'
                // }}
                >
                    {/* Dòng đầu tiên: Thẻ thống kê */}
                    <div className="stats-container">
                        <div className="stat-card">
                            <div className="stat-header"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between', /* Căn hai đầu */
                                    alignItems: 'center' /* Căn giữa các phần tử theo chiều dọc */
                                }}>
                                <h3>Tổng số máy in đang hoạt động</h3>
                                <img height='50px' src={numberOfPrinter} alt="numberOfPrinter" className="stat-icon" />
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


                    {/* Dòng thứ hai: Biểu đồ */}
                    <div className="charts-container">
                        <div className="chart">
                            <h3>Thống kê lượt in theo quý</h3>
                            <div className="chart-content">
                                <img width='100%' src={thongKeLuotInTheoQuy} alt="thongKeLuotInTheoQuy" className="stat-icon" />
                            </div>
                        </div>
                        <div className="chart">
                            <h3>Thống kê lượt in trong tháng </h3>
                            {/* Icon dấu ba chấm */}
                            {/* <IconButton onClick={handleMenuOpen}>
                                <img src={threeDotsIcon} alt="3 dots" style={{ height: '24px', cursor: 'pointer' }} />
                            </IconButton> */}

                            {/* Menu danh sách tùy chọn */}
                            {/* <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>Tháng 1</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Tháng 2</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Tháng 3</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Tháng 4</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Tháng 5</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Tháng 6</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Tháng 7</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Tháng 8</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Tháng 9</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Tháng 10</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Tháng 11</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Tháng 12</MenuItem>
                            </Menu> */}

                            <div className="chart-content">
                                <img height='100%' src={thongKeLuotInThang12} alt="thongKeLuotInThang12" className="stat-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
