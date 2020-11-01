import React from 'react';
import SearchName from '../SearchName/SearchName';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse row" id="navbarNav">
                <div className="search-area col-12">
                    <SearchName />
                </div>
            </div>
        </nav>

    );
};

export default Navbar;