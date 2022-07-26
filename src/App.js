import { useDispatch } from 'react-redux/es/exports';
import { Routes, Route, Redirect, Navigate } from 'react-router-dom';

import PostsPage from './pages/PostsPage';
import CurrentPost from './pages/CurrentPost/CurrentPost';
import { loadPosts, loadCurrebtPost } from './store/post/actions';

import * as s from './styles/App.styled';

function App() {
  const dispatch = useDispatch();

  return (
    <s.BodyWrapper>
      <Routes>
        <Route path="/" exact element={<Navigate to="/posts" />} />
        <Route
          path="/posts"
          exact
          element={
            <>
              <PostsPage onLoad={() => dispatch(loadPosts())} />
            </>
          }
        />
        <Route
          path="/posts/:id"
          exact
          element={
            <>
              <CurrentPost onLoad={() => dispatch(loadCurrebtPost())} />
            </>
          }
        />
      </Routes>
    </s.BodyWrapper>
  );
}

export default App;
