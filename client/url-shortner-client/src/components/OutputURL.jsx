import { useSelector } from "react-redux";
import "./component.css";

export default function OutputURL() {
  const shortURL = useSelector((state) => state);
  return (
    <div className="result-URL">
      <p>
        {shortURL.length > 0 ? (
          <div className="URL-output">
            <a href={shortURL[0].shortURL}>{shortURL[0].shortURL}</a>
            <span
              onClick={() =>
                navigator.clipboard.writeText(shortURL[0].shortURL)
              }
            >
              copy
            </span>
          </div>
        ) : (
          <p>Please Enter your long URL</p>
        )}
      </p>
    </div>
  );
}
