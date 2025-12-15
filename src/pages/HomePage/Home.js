import React from "react";
import LawyerCard from "../../components/LawyerCard/LawyerCard";
import "./Home.css";

function Home({ lawyers, loading, error }) {
  if (loading) return <div className="loader"><div className="spinner"></div></div>;
  if (error) return <p className="error">Error: {error}</p>;
  if (!lawyers || lawyers.length === 0) return <p>No lawyers found.</p>;

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Featured Lawyers</h1>
        <p>Find and connect with top legal professionals</p>
      </div>
      <div className="lawyer-list">
        {lawyers.map((lawyer) => (
          <LawyerCard key={lawyer.login.uuid} lawyer={lawyer} />
        ))}
      </div>
    </div>
  );
}

export default Home;
