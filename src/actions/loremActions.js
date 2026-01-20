import axios from "axios";

export const fetchLorem = () => async (dispatch) => {
  dispatch({ type: "FETCH_LOREM_REQUEST" });
  try {
    const res = await axios.get("https://api.lorem.com/ipsum");
    dispatch({ type: "FETCH_LOREM_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "FETCH_LOREM_FAILURE", payload: err.message });
  }
};
