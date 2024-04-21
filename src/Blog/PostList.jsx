import React from "react";
import { useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
