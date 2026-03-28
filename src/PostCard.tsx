interface PostCardProps {
  title: string;
  content: string;
}

export default function PostCard({ title, content }: PostCardProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button className="btn btn-outline-secondary btn-sm me-1">▲</button>
        <button className="btn btn-outline-secondary btn-sm me-1">▼</button>
      </div>
    </div>
  );
}