import React from "react";
import './Search.css';
import SearchBar from "../SearchResult/SearchBar";

const Search = () => {
    return (
        <div className="box-2">
            <SearchBar />
            <div className="center">
                <p>Start searching your favorite song</p>
            </div>
        </div>
    )
}

export default Search;