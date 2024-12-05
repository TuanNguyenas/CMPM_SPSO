import React from 'react';
import './Navigation.scss';

class Navigation extends React.Component {
    render() {
        const currentPath = window.location.pathname; // Lấy đường dẫn hiện tại

        return (
            <div className="topnav" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
                {/* Button "Tổng Quan" */}
                <a href="/" className={currentPath === '/' ? 'active' : ''}>
                    <button style={{ marginTop: '10px' }}>
                        Tổng Quan
                    </button>
                </a>

                {/* Button "Máy In" */}
                <a href="/printer" className={currentPath === '/printer' ? 'active' : ''}>
                    <button>Máy In</button>
                </a>

                {/* Button "SPSO" */}
                <a href="/SPSO" className={currentPath === '/SPSO' ? 'active' : ''}>
                    <button>SPSO</button>
                </a>

                {/* Button "Thông Báo Bảo Trì" */}
                <a href="/notification" className={currentPath === '/notification' ? 'active' : ''}>
                    <button style={{ textAlign: 'left' }}>
                        Thông Báo Bảo Trì
                    </button>
                </a>
            </div>
        );
    }
}

export default Navigation;
