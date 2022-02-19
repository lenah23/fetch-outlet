import './App.css';
import { Home, Posts, PostId } from './components/index';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/home" className='home-title'>HOME / </Link>
      <Link to="/posts" className='posts-title'>POSTS</Link>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/posts" element={<Posts />}>
          <Route path="/posts/:id" element={<PostId />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
