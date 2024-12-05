import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div style={{ marginTop: '120px' }}> {/* Đẩy nội dung xuống dưới header */}
                {children} {/* Đây là nội dung của từng giao diện */}
            </div>
        </>
    );
};

export default Layout;
