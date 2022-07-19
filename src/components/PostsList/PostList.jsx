import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PostItem from '../PostItem';

function PostsList() {
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading);

  const [showBody, setShowBody] = useState(false);

  const handleShowBody = () => setShowBody(!showBody);

  return (
    <div>
      {loading && <h1>...loading</h1>}
      <button onClick={handleShowBody}>{!showBody ? 'Show' : 'Hide'} Body Data</button>
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            {showBody && <th>Body</th>}
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <PostItem key={post.id} setShowBody={setShowBody} post={post} showBody={showBody} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostsList;
