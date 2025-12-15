import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./LawyerProfile.css";

function LawyerProfile({ lawyers, loading, error }) {
  const { id } = useParams();
  const navigate = useNavigate();

  if (loading) return <div className="loader"><div className="spinner"></div></div>;
  if (error) return <p className="error">Error: {error}</p>;
  if (!lawyers || lawyers.length === 0) return <p>Loading...</p>;

  const lawyer = lawyers.find((l) => l.login && l.login.uuid === id);
  if (!lawyer) return <p>Lawyer not found.</p>;

  const dob = lawyer.dob && lawyer.dob.date ? new Date(lawyer.dob.date).toLocaleDateString() : 'N/A';
  const age = lawyer.dob && lawyer.dob.age ? lawyer.dob.age : 'N/A';
  const address = lawyer.location ? `${lawyer.location.street.number} ${lawyer.location.street.name}, ${lawyer.location.city}, ${lawyer.location.state} ${lawyer.location.postcode}, ${lawyer.location.country}` : 'N/A';

  return (
    <div className="lawyer-detail">
      <button onClick={() => navigate(-1)}>Back</button>
      <img src={lawyer.picture.large} alt="lawyer" />
      <div>
        <h2>{lawyer.name.first} {lawyer.name.last}</h2>
        <p>Email: {lawyer.email}</p>
        <p>Phone: {lawyer.phone} / {lawyer.cell}</p>
        <p>City: {lawyer.location.city}</p>
        <p>Address: {address}</p>
        <p>DOB: {dob} (Age: {age})</p>
      </div>
    </div>
  );
}

export default LawyerProfile;
