import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./../Blog/postAction";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    dispatch(addPost(title, content));
    setTitle("");
    setContent("");
  };
  console.log(title, content);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;
