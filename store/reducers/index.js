import { combineReducers } from "redux";
import storiesReducer from "./storiesReducer";

export default combineReducers({
  stories: storiesReducer,
});
