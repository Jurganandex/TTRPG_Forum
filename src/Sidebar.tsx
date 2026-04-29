import PostButton from './PostButton'; 

type SidebarProps = {
  setPosts: React.Dispatch<
    React.SetStateAction<{ title: string; content: string }[]>
  >;
};

export default function Sidebar({ setPosts }: SidebarProps) {

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <h5>About</h5>
          <p>A forum for TTRPG discussions.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5>Categories</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">D&D 5e (2024)</li>
            <li className="list-group-item">D&D 5e (2014)</li>
            <li className="list-group-item">Worldbuilding</li>
            <li className="list-group-item">Backstory</li>
          </ul>
        </div>
      </div>
      <div>
        <PostButton setPosts={setPosts}/>
      </div>
    </div>
  );
}