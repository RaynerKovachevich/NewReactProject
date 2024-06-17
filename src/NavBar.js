import React, { useState } from "react";
import logo from "./assets/Newlogo.png";



const NavBar = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false)

    const handleCategoriesClick = () => {
        setShowCategories(!showCategories);
    };

    const handleLoginClick = () => {
        setShowLogin(!showLogin);
    }

    const handleRegister = () => {
        setShowRegister(!showRegister);
        setShowLogin(false);
    }

    return (
        <div className="navbar">
            <button id="categories-btn" onClick={handleCategoriesClick}>
                Home
            </button>
            
            <button id="categories-btn" onClick={handleCategoriesClick}>
                Categories
            </button>
            
            <button id="login-btn" onClick={handleLoginClick}>
                Login
            </button>
           
            <button id="categories-btn" onClick={handleRegister}>
                Register
            </button>

            <div id="navbar-buttons" className={`navbar-buttons ${showCategories ? 'show' : ''}`}>
                <button className="category-buttons"> Action</button>
                <button className="category-buttons">Comedy</button>
                <button className="category-buttons">Drama</button>
                <button className="category-buttons">Horror</button>
                <button className="category-buttons">Romance</button>
            </div>

            {showLogin && (
                <div className="login-form">
                    <form>
                        <h2>Login</h2>
                        <label htmlFor="username ">UserName</label>
                        <input type="text" name="username" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            )}

            {showRegister && (
                <div className="Register-form">
                    <form>
                        <h2>Register</h2>
                        <label htmlFor="username">UserName</label>
                        <input type="text" name="username" />
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email"/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"/>
                        <label htmlFor="cofirmPassword">cofirm Password</label>
                        <input type="password" name="confirmPassword" />
                        <button type="sumit">Register</button>
                    </form>
                </div>
            )}

        </div>
    )
}
export default NavBar;