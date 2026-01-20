import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../actions/loremActions";

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.lorem);

  useEffect(() => { dispatch(fetchLorem()); }, [dispatch]);

  return (
    <div>
      {/* Main div must stay */}
      <h1>Lorem Redux App</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p><strong>{data.title}</strong>: {data.body}</p>}
    </div>
  );
};

export default App;
