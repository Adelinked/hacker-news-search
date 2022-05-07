import { useSelector } from "react-redux";
import Hit from "./Hit";

export default function Hits() {
  const { stories, page } = useSelector((state) => state.stories);

  return (
    <div className="hits">
      {stories[page] &&
        stories[page].map((s) => <Hit {...s} key={s.objectID} />)}
    </div>
  );
}
