import React, { useState } from "react";
import logo from "./assets/Newlogo.png";



const NavBar = () => {
    const [showCategories, setShowCategories] = useState(false);

    const handleCategoriesClick = () => {
        setShowCategories(!showCategories);
    };

    return (
        <div className="navbar">
            <button id="categories-btn" onClick={handleCategoriesClick}>
                Home
            </button>
            
            <button id="categories-btn" onClick={handleCategoriesClick}>
                Categories
            </button>
            
            <button id="categories-btn" onClick={handleCategoriesClick}>
                Login
            </button>

            <div id="navbar-buttons" className={`navbar-buttons ${showCategories ? 'show' : ''}`}>
                <button className="category-buttons"> Action</button>
                <button className="category-buttons">Comedy</button>
                <button className="category-buttons">Drama</button>
                <button className="category-buttons">Horror</button>
                <button className="category-buttons">Romance</button>
            </div>

        </div>
    )
}
export default NavBar;