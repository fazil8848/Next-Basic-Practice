import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const fetchCommnets = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    console.log(data);
    setComments(data);
  };

  const handleCommentSubmit = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <br />
      <input
        onChange={(e) => setComment(e.target.value)}
        type="text"
        className="m-4 text-black"
      />
      <button onClick={handleCommentSubmit}> Submit Comment</button>
      <br />
      <br />
      <button className="m-4" onClick={fetchCommnets}>
        Load Comments
      </button>
      <br />
      {comments.map((comment) => (
        <div key={comment.id} className="">
          {comment.text}
        </div>
      ))}
    </>
  );
}

export default CommentsPage;
