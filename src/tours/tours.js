import { useState } from "react";

const Tours = ({ id, image, info, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="card">
        <div className="cardPreview">
          <img
            className="cardPreviewImage"
            src={image}
            alt={name}
            title={name}
          />
        </div>
        <div className="cardBody">
          <h5 className="cardSubtitle">{name}</h5>
          <p className="cardInfo">
            {readMore ? info : `${info.substring(0, 200)}... `}
            <button
              className="toggleButton"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? " show less " : " show more"}
            </button>
          </p>
        </div>
        <div className="cardRemove">
          <button onClick={() => removeTour(id)} className="removeIcon">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Tours;
