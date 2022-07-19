import React from 'react';

function PostItem({ post, showBody }) {
  return (
    <tr>
      <td>{post.userId}</td>
      <td>{post.id}</td>
      <td>{post.title}</td>
      {showBody && <td>{post.body}</td>}
    </tr>
  );
}
export default PostItem;
