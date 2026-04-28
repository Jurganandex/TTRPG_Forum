import { useState } from "react";

interface PostCardProps {
  title: string;
  content: string;
  rating?: number;
  Truerating?: number;
}


export default function PostCard({ title, content, Truerating = 0, rating = 0}: PostCardProps) {
  const [currentRating, setCurrentRating] = useState(rating);
  
  const upvote = () => {
    setCurrentRating(prev => prev + 1);
  };

  const downvote = () => {
    setCurrentRating(prev => prev - 1);
  };
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button className="btn btn-outline-secondary btn-sm me-1" value={1} onClick={upvote}>▲</button>
        <button className="btn btn-outline-secondary btn-sm me-1" value={-1} onClick={downvote}>▼</button>
        <p className="card-rating">
          {currentRating}
        </p>
      </div>
    </div>
  );
}
