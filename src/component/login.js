import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Header from './headerNotLoggedIn';
import Footer from "./Footer"; 
import "./login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "abc" && password === "123456") {
            navigate("/home");
        } else {
            setError("Tên đăng nhập hoặc mật khẩu không đúng.");
        }
    };


    const handleLoginClick = () => {
        navigate("/");
    };

    return (
        <div className="login-page">

            <Header />
            <div className="login-content">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Đăng nhập</h2>
                    {error && <p className="error">{error}</p>}
                    <div className="form-group">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Nhập tên đăng nhập"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-login">
                        Đăng nhập
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
