import './App.css';
import Playlist from './components/playlist/Playlist';

const App = () => {
  return (
    <div className='all'>
      <div className='title'>
        <h1 className='name'>Jammming <span className='powered'>Powered by Spotify</span></h1>
        <h2>Let's find something for your playlist</h2>
      </div>
      <Playlist />
    </div>
  );
}

export default App;
