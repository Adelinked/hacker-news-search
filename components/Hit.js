import { displayDate } from "../utils/functions";
import { useDispatch } from "react-redux";
import { removeHit } from "../store/actions/storiesActions";
export default ({
  title,
  created_at,
  url,
  objectID,
  points,
  author,
  num_comments,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="hit">
      <p className="date-info">{displayDate(created_at)}</p>
      <p className="title">{title}</p>
      <p className="date-info">
        {points} points by <span>{author} | </span> {num_comments} comments
      </p>
      <a className="more" href={url} target="_blank">
        Read more
      </a>
      <span className="remove" onClick={() => dispatch(removeHit(objectID))}>
        Remove
      </span>
    </div>
  );
};
