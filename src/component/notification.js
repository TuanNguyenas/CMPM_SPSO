import React, { useState } from 'react';
import './notification.scss';
import { Menu, MenuItem, IconButton } from '@mui/material';

import HeaderAdmin from '../component/headerAdmin'; // Import Header
import Navigation from '../pages/nav/Navigation';
import editIcon from '../images/edit.png'; // Đường dẫn đến file hình ảnh cây bút

const Notification = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'Thông báo về hệ thống in ấn thông minh tại HCMUT',
            author: 'Student Printing Service Officer - Thứ Tư, 3 tháng 1 2024, 3:12 PM',
            content: `Kể từ ngày 27/10/2024, hệ thống dịch vụ in ấn thông minh sẽ được đưa vào hoạt động.\n
            Các bạn sinh viên sử dụng hệ thống SSPS mới cho các môn học từ học kỳ 1 năm học 2024-2025 (HK241).\n
            Sinh viên sẽ được cung cấp số lượng trang in nhất định vào mỗi đầu tháng.\n
            Sinh viên có thể in các tài liệu trực tuyến.\n
            Sinh viên có thể xem được lịch sử in ấn và tạo các báo cáo các trang đã in.\n
            Trân trọng,\n
            SPSO`,
        },
    ]);

    const [editingNotification, setEditingNotification] = useState(null);

    const handleEdit = (id) => {
        const notification = notifications.find((n) => n.id === id);
        setEditingNotification(notification);
    };

    const saveEdit = () => {
        setNotifications((prev) =>
            prev.map((n) =>
                n.id === editingNotification.id ? { ...n, ...editingNotification } : n
            )
        );
        setEditingNotification(null);
    };

    const cancelEdit = () => {
        setEditingNotification(null);
    };

    const addNotification = () => {
        const newNotification = {
            id: notifications.length + 1,
            title: 'Thông báo mới',
            author: `Student Printing Service Officer - ${new Date().toLocaleString()}`,
            content: 'Nội dung thông báo mới.\nHãy nhập thông báo chi tiết hơn ở đây.',
        };
        setNotifications((prev) => [...prev, newNotification]);
    };

    return (
        <div className="notification-page">
            {/* Header */}
            <HeaderAdmin />

            {/* Layout chính */}
            <div className="layout">
                {/* Sidebar */}
                <Navigation />

                {/* Nội dung thông báo */}
                <div className="content">
                    <button className="add-button" onClick={addNotification}>
                        Thêm thông báo mới
                    </button>
                    <div className="notification-container">
                        {notifications.map((notification) => (
                            <div className="notification-card" key={notification.id}>
                                {editingNotification?.id === notification.id ? (
                                    <div className="edit-mode large-edit-mode">
                                        <input
                                            type="text"
                                            value={editingNotification.title}
                                            onChange={(e) =>
                                                setEditingNotification({
                                                    ...editingNotification,
                                                    title: e.target.value,
                                                })
                                            }
                                            className="edit-title large-edit-input"
                                        />
                                        <textarea
                                            value={editingNotification.content}
                                            onChange={(e) =>
                                                setEditingNotification({
                                                    ...editingNotification,
                                                    content: e.target.value,
                                                })
                                            }
                                            className="edit-content large-edit-textarea"
                                        ></textarea>
                                        <div className="edit-actions">
                                            <button className="save-button" onClick={saveEdit}>
                                                Lưu
                                            </button>
                                            <button className="cancel-button" onClick={cancelEdit}>
                                                Hủy
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="notification-header">
                                            <h2>{notification.title}</h2>
                                            <button
                                                className="edit-button"
                                                onClick={() => handleEdit(notification.id)}
                                            >
                                                <img src={editIcon} alt="Edit" />
                                            </button>
                                        </div>
                                        <p className="author">{notification.author}</p>
                                        <hr />
                                        <div
                                            className="notification-content"
                                            style={{ whiteSpace: 'pre-line' }}
                                        >
                                            {notification.content}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
