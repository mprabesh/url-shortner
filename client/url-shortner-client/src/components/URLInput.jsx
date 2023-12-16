import { useState } from "react";
import "./component.css";
import { processURL } from "../services/urlService";
import { useDispatch } from "react-redux";
import { setShortURL } from "../reducers/urlReducer";

export default function URLInput() {
  const [originalURL, setOriginalURL] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    processURL(originalURL)
      .then((res) => dispatch(setShortURL(res)))
      .catch((err) => alert(err.response.data));
    setOriginalURL("");
  };
  return (
    <>
      <div className="url-input">
        <input
          type="text"
          placeholder="Enter your URL"
          value={originalURL}
          onChange={(e) => {
            setOriginalURL(e.target.value);
          }}
        />
      </div>
      <div className="url-btn">
        <button onClick={handleClick}>Shorten URL</button>
      </div>
    </>
  );
}
