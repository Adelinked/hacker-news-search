import axios from "axios";

export const loadingStories = () => async (dispatch) => {
  dispatch({ type: "LOADING_STORIES", payload: [] });
};

export const setError = (error) => async (dispatch) => {
  dispatch({ type: "ERROR", payload: error });
};

export const setQuery = (val) => async (dispatch) => {
  dispatch(setPage(0));
  dispatch({ type: "SET_QUERY", payload: val });
};

export const setPage = (val) => async (dispatch) => {
  dispatch({ type: "SET_PAGE", payload: val });
};

export const removeHit = (val) => async (dispatch) => {
  dispatch({ type: "REMOVE_HIT", payload: val });
};

export const fetchStories = (query, page) => async (dispatch) => {
  let url = "https://hn.algolia.com/api/v1/search?";
  url = `${url}query=${query}&page=${page}`;

  dispatch(loadingStories());
  try {
    const data = await axios.get(url);
    const fetchedData = data.data;

    if (fetchedData.hits && fetchedData.hits.length === 0) {
      dispatch(setError(true));
      setTimeout(() => {
        dispatch(setError(false));
      }, 700);
    } else {
      dispatch({
        type: "FETCH_STORIES",
        payload: fetchedData,
      });
    }
  } catch (error) {
    dispatch(setError(true));
    setTimeout(() => {
      dispatch(setError(false));
    }, 700);
  }
};
