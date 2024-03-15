import React from "react";
import './Playlist.css';
import fakeMusicData from '../../fakedata/data'

const Playlist = () => {
    return (
        <div className="box-3">
            <div className="flex">
                <div className="img"></div>
                <div className="info">
                    <p className="info-2">Playlist</p>
                    <h1 className="size">My Playlist</h1>
                    <p className="info-2">Gab</p>
                </div>
            </div>
            <div className="btn">
                <button className="put">Modify Your Playlist</button>
                <button className="save">Save to Spotify</button>
            </div>
            <div className="gap">
                {fakeMusicData.map(e => (
                    <div className="song">
                        <div className="flex-2">
                            <div className="img-2"></div>
                            <div className="gap-2">
                                <p className="song-2">{e.chanson}</p>
                                <p className="artist">{e.artiste}</p>
                            </div>
                        </div>
                        <p className="album">{e.album}</p>
                        <button className="remove">Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Playlist;