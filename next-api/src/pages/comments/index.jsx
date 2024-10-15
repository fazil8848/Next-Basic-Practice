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
    setComment("");
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);
    fetchCommnets();
  };

  return (
    <>
      <br />
      <input
        value={comment}
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
          {comment.text} |{" "}
          <button onClick={(e) => handleDelete(e, comment.id)}>Delete </button>
          <button onClick={(e) => handleUpdate(e, comment.id)}>Update </button>
        </div>
      ))}
    </>
  );
}

export default CommentsPage;
