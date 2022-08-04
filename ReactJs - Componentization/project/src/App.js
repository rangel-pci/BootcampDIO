import './App.css';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import Search from './components/Search';
import useApp from './hooks/useApp';

function App() {
  const {
    user,
    handleSearchUser
  } = useApp();

  return (
    <div className="App">
      <Search handleSearchUser={handleSearchUser} />
      <div className='container'>
        <Profile user={user} />
        <Repositories user={user} />
      </div>
    </div>
  );
}

export default App;
