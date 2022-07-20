import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PostItem from '../PostItem';

import * as s from './PostLists.styled';

function PostsList() {
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading);

  const [showBody, setShowBody] = useState(false);

  const handleShowBody = () => setShowBody(!showBody);
  console.log(posts);

  return (
    <div>
      {loading && <s.LoadingText>...loading</s.LoadingText>}
      <button onClick={handleShowBody}>{!showBody ? 'Show' : 'Hide'} Body Data</button>
      <s.TableWrapper>
        <thead>
          <tr>
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
      </s.TableWrapper>
    </div>
  );
}

export default PostsList;
