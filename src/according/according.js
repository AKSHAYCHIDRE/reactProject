import { useState } from "react";

const According = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div className="accordingItem">
        <p className="question">{title}</p>
        {showInfo && <p className="answer">{info}</p>}
        <button className="iconButton" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default According;
