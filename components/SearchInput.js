import { useDispatch, useSelector } from "react-redux";
import { fetchStories, setQuery } from "../store/actions/storiesActions";
import { useEffect, useState } from "react";

export default function SearchInput() {
  const dispatch = useDispatch();
  const { query, page } = useSelector((state) => state.stories);

  useEffect(() => {
    // to minimize the fetch requests while the user is typing
    let interval;
    if (query !== null && query !== undefined) {
      interval = setTimeout(() => {
        dispatch(fetchStories(query, page)); //send request only when timer is over after user has finished typing
      }, 800);
    } else {
      clearTimeout(interval);
    }
    return () => clearInterval(interval);
  }, [query]);

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
    //dispatch(fetchStories(query, page));
  };
  return (
    <input
      className="search"
      type="text"
      placeholder="Search"
      label="Title"
      id="hn-news"
      value={query}
      onChange={handleChange}
    />
  );
}
