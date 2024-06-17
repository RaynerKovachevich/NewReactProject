import React, { useState } from "react";
import logo from "./assets/Newlogo.png";



const NavBar = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleCategoriesClick = () => {
        setShowCategories(!showCategories);
    };

    const handleLoginClick = () => {
        setShowLogin(!showLogin); 
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
           
            <button id="categories-btn" onClick={handleCategoriesClick}>
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

        </div>
    )
}
export default NavBar;