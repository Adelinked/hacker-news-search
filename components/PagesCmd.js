import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories, setPage } from "../store/actions/storiesActions";
import "font-awesome/css/font-awesome.min.css";

export default function PagesCmd() {
  const dispatch = useDispatch();
  const { loading, stories, query, page, maxPages } = useSelector(
    (state) => state.stories
  );
  const pageForward = () => {
    dispatch(setPage(page === maxPages - 1 ? maxPages - 1 : page + 1));

    if (!stories[page + 1]) {
      dispatch(fetchStories(query, page));
    }
  };
  const pageBackward = () => {
    dispatch(setPage(page === 0 ? 0 : page - 1));
  };
  return (
    <div className="pages-cmd">
      <p>
        <button onClick={pageBackward} disabled={loading}>
          <i className="fa fa-chevron-left"></i>
        </button>
        {page + 1}/{maxPages}
        <button onClick={pageForward} disabled={loading}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </p>
    </div>
  );
}
