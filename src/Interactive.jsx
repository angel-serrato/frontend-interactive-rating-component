import React, { useState } from 'react';
import './Interactive.css';

function Interactive() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating !== null) {
      setSubmitted(true);
    }
  };

  return (
    <div className="rating">
      {!submitted ? (
        <div className="rating__card rating__card--state">
          <div className="rating__icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="icon icon-tabler icons-tabler-filled icon-tabler-star">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
            </svg>
          </div>
          <h1 className="rating__title">How did we do?</h1>
          <p className="rating__description">
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!
          </p>
          <div className="rating__options">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`rating__option ${rating === num ? 'rating__option--selected' : ''}`}
                onClick={() => setRating(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <button className="rating__submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="rating__card rating__card--thank-you">
          <img
            src="/src/assets/illustration-thank-you.svg"
            alt="Thank you illustration"
            className="rating__thank-you-img"
          />

          <div className="rating__selection">You selected {rating} out of 5</div>
          <h1 className="rating__thank-you-title">Thank you!</h1>
          <p className="rating__thank-you-message">
            We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
};

export default Interactive

