import {
  ERROR,
  FETCH_STORIES,
  LOADING_STORIES,
  SET_QUERY,
  SET_PAGE,
  REMOVE_HIT,
} from "../types";

const initialState = {
  loading: false,
  error: false,
  stories: [],
  query: "Java",
  page: 0,
  maxPages: 20,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_STORIES:
      return { ...state, loading: true };
    case FETCH_STORIES:
      return {
        ...state,
        stories: [...state.stories, [...action.payload.hits]],
        // The pages are saved to fetch data only when necessary
        maxPages: action.payload.nbPages,
        loading: false,
      };
    case SET_QUERY:
      return { ...state, query: action.payload, stories: [] };
    case SET_PAGE:
      return { ...state, page: action.payload };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    case REMOVE_HIT:
      const newStories = [...state.stories];
      newStories[state.page] = newStories[state.page].filter(
        (h) => h.objectID !== action.payload
      );
      return { ...state, stories: newStories };

    default:
      return state;
  }
}
