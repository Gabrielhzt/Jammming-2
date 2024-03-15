import React from "react";
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar= () => {
    return (
        <div className="searchbar">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#aaaaaa",}} />
            <input className="input" type="text" placeholder="Enter a song title" />
        </div>
    )
}

export default SearchBar;