import { useDispatch } from 'react-redux/es/exports';
import { Routes, Route, Redirect, Navigate } from 'react-router-dom';

import PostsPage from './pages/PostsPage';
import CurrentPost from './pages/CurrentPost/CurrentPost';
import { loadPosts } from './store/post/actions';

import * as s from './styles/App.styled';
import ReadList from './pages/ReadList/ReadList';

function App() {
  const dispatch = useDispatch();

  return (
    <s.BodyWrapper>
      <Routes>
        <Route path="/" exact element={<Navigate to="/posts" />} />
        <Route path="/posts" exact element={<PostsPage />} />
        <Route path="/posts/:id" exact element={<CurrentPost />} />
        <Route path="/readlist" exact element={<ReadList />} />
      </Routes>
    </s.BodyWrapper>
  );
}

export default App;
