import { useDispatch } from 'react-redux/es/exports';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PostsPage from './pages/PostsPage';
import SideBar from './containers/SideBar';
import { loadPosts } from './store/post/actions';

import * as s from './App.styled';

function App() {
  const dispatch = useDispatch();

  return (
    <s.BodyWrapper>
      {/* <button onClick={() => dispatch(loadPosts())}>click me</button> */}
      <SideBar />
      <PostsPage onLoad={() => dispatch(loadPosts())} />
    </s.BodyWrapper>
  );
}

export default App;
