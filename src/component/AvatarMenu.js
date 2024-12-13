import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import avatarImage from '../images/avatar.svg'; // Đường dẫn tương ứng từ AvatarMenu.js
import './AvatarMenu.scss'; // Thêm CSS riêng

const AvatarMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogOut = () => {
        navigate("/");
    };

    return (
        <div className="avatar-menu">
            {/* Avatar button */}
            <div className="avatar-button" onClick={handleMenuToggle}>
                <img src={avatarImage} alt="User Avatar" className="avatar-img" />
            </div>

            {/* Dropdown menu */}
            {menuOpen && (
                <div className="dropdown-menu">
                    <button className="dropdown-item" onClick={handleLogOut}>
                        Đăng xuất
                    </button>
                </div>
            )}
        </div>
    );
};

export default AvatarMenu;
