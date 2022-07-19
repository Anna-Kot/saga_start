import { useSelector, useDispatch } from "react-redux/es/exports";

import Posts from "./Posts";

import "./App.css";

function App() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log(store);

  return (
    <div>
      <button onClick={() => dispatch({ type: "LOAD_DATA" })}>click me</button>
      <Posts store={store} />
    </div>
  );
}

export default App;
