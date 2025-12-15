import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";

function LawyerCard({ lawyer }) {
  const getRandomRating = () => Math.floor(Math.random() * 2) + 4;
  const rating = getRandomRating();
  const reviews = Math.floor(Math.random() * 10) + 1;

  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <Link to={`/lawyer/${lawyer.login.uuid}`} className="card-link">
      <div className="card">
        <div className="card-image-wrapper">
          <img src={lawyer.picture.large} alt={`${lawyer.name.first} ${lawyer.name.last}`} className="card-image" />
        </div>
        <div className="card-content">
          <h3 className="card-name">Advocate {lawyer.name.first} {lawyer.name.last}</h3>
          <p className="card-city">{lawyer.location.city}</p>
          <div className="card-rating">
            <span className="stars">{renderStars(rating)}</span>
            <span className="review-count">({reviews} review{reviews !== 1 ? 's' : ''})</span>
          </div>
          <div className="card-footer">
            <div className="card-user">
              <div className="user-avatar"></div>
              <div className="user-info">
                <span className="username">{lawyer.login.username}</span>
                <span className="time">2 years ago</span>
              </div>
            </div>
            <span className="status-badge closed">Closed</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LawyerCard;
