import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const fetchCommnets = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    console.log(data);
    setComments(data);
  };
  return (
    <>
      <button onClick={fetchCommnets}>Load Comments</button>
      {comments.map((comment) => (
        <div key={comment.id} className="">
          {comment.text}
        </div>
      ))}
    </>
  );
}

export default CommentsPage;
