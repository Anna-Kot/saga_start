import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post';
// import state from '.reducers';

function Posts() {
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading);
  console.log(posts);
  console.log('loading', loading);

  return (
    <div>
      {loading && <h1>...loading</h1>}
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <Post post={post} key={post.id}></Post>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Posts;
