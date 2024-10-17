import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [editingId, setEditingId] = useState(0);

  const fetchCommnets = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    // console.log(data);
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
    // const data = await response.json();
    // console.log(data);
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

  const handleEnableEdit = (e, current) => {
    e.preventDefault();
    setEditingId(current.id);
    setEditComment(current);
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    const response = await fetch(`/api/comments/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ editComment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const data = await response.json();
    // console.log(data);
    fetchCommnets();
    setEditingId(0);
  };

  return (
    <>
      <br />
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
        className="m-4 text-black rounded-md"
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
          {comment.text}{" "}
          <button
            className="border p-1 rounded-md"
            onClick={(e) => handleDelete(e, comment.id)}
          >
            Delete
          </button>{" "}
          <button
            className="border p-1 rounded-md"
            onClick={(e) => handleEnableEdit(e, comment)}
          >
            Edit
          </button>{" "}
          {editingId === comment.id && (
            <>
              <input
                value={editComment.text}
                onChange={(e) => setEditComment(e.target.value)}
                type="text"
                className="m-4 text-black rounded-md"
              />{" "}
              <button
                className="border p-1 rounded-md"
                onClick={(e) => handleUpdate(e, comment.id)}
              >
                Update
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default CommentsPage;
