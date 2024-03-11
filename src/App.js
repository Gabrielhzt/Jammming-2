import './App.css';
import Playlist from './components/playlist/Playlist';
import Search from './components/Search/Search';

const App = () => {
  return (
    <div className='all'>
      <div className='first-box'>
        <div className='box'>
          <h1 className='name'>Jammming <span className='powered'>Powered by Spotify</span></h1>
          <h2>Let's find something for your playlist</h2>
        </div>
      </div>
      <div className='search-box'>
        <Search />
      </div>
      <div className='playlist-box'>
        <Playlist />
      </div>
    </div>
  );
}

export default App;
