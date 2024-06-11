import React from "react";

const NavBar = ({ setGenre }) => {
    return (
        <div className="navbar">
            <button onClick={() => setGenre('All')}>All</button>
            <button onClick={() => setGenre('Action')}>Action</button>
            <button onClick={() => setGenre('Comedy')}>Comedy</button>
            <button onClick={() => setGenre('Drama')}>Drama</button>
            <button onClick={() => setGenre('Horror')}>Horror</button>
        </div>
    );
}

export default NavBar;