import React from "react";
import './Search.css';
import SearchBar from "../SearchBar/SearchBar";
import fakeMusicData from "../../fakedata/data";

const Search = () => {
    return (
        <div className="box-2">
            <SearchBar />
            <div className="search-r">
                {fakeMusicData.map(e => (
                    <div className="song">
                        <div className="flex-2">
                            <div className="img-2"></div>
                            <div className="gap-2">
                                <p className="song-2">{e.chanson}</p>
                                <p className="artist">{e.artiste}</p>
                            </div>
                        </div>
                        <button className="add">Add</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search;