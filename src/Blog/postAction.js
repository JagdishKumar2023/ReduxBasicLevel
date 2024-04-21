let nextPostId = 1;

export const addPost = (title, content) => ({
  type: "ADD_POST",
  payload: {
    id: nextPostId++,
    title,
    content,
  },
});

export const deletePost = (postId) => ({
  type: "DELETE_POST",
  payload: postId,
});
