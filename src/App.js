import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import LawyerProfile from "./pages/LawyerProfilePage/LawyerProfile";
import { fetchLawyers } from "./api/lawyersApi";

function App() {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchLawyers()
      .then((data) => {
        if (!mounted) return;
        setLawyers(data);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to fetch lawyers");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home lawyers={lawyers} loading={loading} error={error} />} />
        <Route path="/lawyer/:id" element={<LawyerProfile lawyers={lawyers} loading={loading} error={error} />} />
      </Routes>
    </Router>
  );
}

export default App;

