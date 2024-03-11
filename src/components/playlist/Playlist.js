import React from "react";
import './Playlist.css'

const Playlist = () => {
    return (
        <div className="box-3">
            <div className="flex">
                <div className="img"></div>
                <div className="info">
                    <p>Playlist</p>
                    <h1 className="size">My Playlist</h1>
                    <p>Gab</p>
                </div>
            </div>
            <div className="btn">
                <button className="put">Modify Your Playlist</button>
                <button className="save">Save to Spotify</button>
            </div>
            <div className="content-1">
                <p>Your playlist is empty</p>
            </div>
        </div>
    )
}

export default Playlist;