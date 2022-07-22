import { useDispatch } from 'react-redux/es/exports';

import PostsList from './components/PostsList';
import { loadPosts } from './store/post/actions';

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(loadPosts())}>click me</button>
      <PostsList />
    </div>
  );
}

export default App;
