import Navbar from './Navbar';
import PostCard from './PostCard';
import Sidebar from './Sidebar';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Navbar/>

      <div className="container-fluid flex-grow-1 d-flex flex-column px-0">
        <div className="row g-0 flex-grow-1">

          <div className="col-3 bg-secondary">
            <div className="p-3">
              <Sidebar setPosts={setPosts} />
            </div>
          </div>
          
          <div className='posts col-5'>
          {posts.map((p, i) => (
          <PostCard key={i} title={p.title} content={p.content} />
        ))}
          </div>

        </div>
      </div>
    </div>
  );
}