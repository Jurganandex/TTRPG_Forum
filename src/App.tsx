import Navbar from './Navbar';
import PostCard from './PostCard';
import Sidebar from './Sidebar';
import './App.css';

export default function App() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Navbar/>

      <div className="container-fluid flex-grow-1 d-flex flex-column px-0">
        <div className="row g-0 flex-grow-1">

          <div className="col-3 bg-secondary">
            <div className="p-3">
              <Sidebar/>
            </div>
          </div>
          
          <div className="col-9 p-3 h-100">
            <PostCard title="Test" content="Test" />
          </div>

        </div>
      </div>
    </div>
  );
}