import React, { useState } from "react";



const NavBar = () => {
    const [showCategories, setShowCategories] = useState(false);

    const handleCategoriesClick = () => {
        setShowCategories(!showCategories);
    };

    return (
        <div className="navbar">
            <button id="categories-btn" onClick={handleCategoriesClick}>
                Categories
            </button>
            <div id="navbar-buttons" className={`navbar-buttons ${showCategories ? 'show' : ''}`}>
                <button>Action</button>
                <button>Comedy</button>
                <button>Drama</button>
                <button>Horror</button>
                <button>Romance</button>
            </div>

        </div>
    )
}
export default NavBar;