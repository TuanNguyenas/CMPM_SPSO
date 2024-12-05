import React from 'react';
import './headerAdmin.scss';
import logo from '../images/logoBK.jpg';
import noti from '../images/Noti.svg';
import AvatarMenu from './AvatarMenu'; // Thêm import AvatarMenu

class Header extends React.Component {
    render() {
        return (
            <div className="headerr">
                {/* Logo */}
                <div className="logo">
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            height: '80px',
                            width: '80px',
                            objectFit: 'contain',
                        }}
                    />
                    <span
                        style={{
                            color: 'white',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            marginLeft: '10px',
                        }}
                    >
                        HCMUT-SSPS
                    </span>
                </div>

                {/* Menu */}
                <div className="menu">
                    <div
                        className="noti-container"
                        style={{
                            width: '100px',
                            display: 'flex',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            padding: '0px',
                            alignItems: 'center',
                            marginRight: '30px'
                        }}
                    >
                        {/* Nút thông báo */}
                        <button
                            style={{
                                color: 'black',
                                width: '50px',
                                height: '50px',
                                borderRadius: '10px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '5px',
                            }}
                        >
                            <img
                                src={noti}
                                alt="noti1"
                                style={{
                                    height: '30px',
                                    width: '30px',
                                    objectFit: 'contain',
                                }}
                            />
                        </button>

                        {/* Avatar Menu */}
                        <AvatarMenu />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
