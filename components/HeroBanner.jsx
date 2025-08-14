import React, { useState, useRef, useEffect } from "react";
import { Trophy, Funnel, SquarePlus, Search, ChevronDown } from "lucide-react";

function HeroBanner() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section className="hero">
      <h1>
        Find Your <br />
        <span className="highlight">Dream Job Now</span>
      </h1>

      {/* Search Bar */}
      <div className="search-bar" ref={dropdownRef}>
        <div className="search-inner">
          <Search className="search-icon" />
          <div className="search-text" onClick={handleDropdownToggle}>
            Search jobs, skills or companies
            <ChevronDown className="dropdown-icon" />
          </div>
          <button>Find Jobs</button>
        </div>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="dropdown-menu">
            <div>Jobs</div>
            <div>Skills</div>
            <div>Companies</div>
          </div>
        )}
      </div>

      {/* Suggested Tags */}
      <div className="tags">
        <span>Social Science Teacher</span>
        <span>Math Faculty</span>
        <span>Physics JEE Expert</span>
      </div>

      {/* Features */}
      <div className="features">
        <div className="feature">
          <Trophy style={{ height: "35px", width: "35px" }} />
          <p>Top 1% candidates, 3x faster hiring</p>
        </div>
        <div className="feature">
          <Funnel style={{ height: "35px", width: "35px" }} />
          <p>Streamlined hiring with AI screening</p>
        </div>
        <div className="feature">
          <SquarePlus style={{ height: "35px", width: "35px" }} />
          <p>Advanced filtering & instant scheduling</p>
        </div>
      </div>

      {/* Short Description */}
      <p className="description">
        Empowering education, coaching, and tech sectors to hire verified,
        ready-to-join talent faster. Find high-paying jobs that match your
        skills and goals with AI-powered screening, instant interview
        scheduling, and 24/7 job alerts.
      </p>

      {/* Stats Cards */}
      <div className="stats">
        <div className="stat-card">
          <h2>7500+</h2>
          <p>Jobs Available</p>
        </div>
        <div className="stat-card">
          <h2>5500+</h2>
          <p>Companies Hiring</p>
        </div>
        <div className="stat-card">
          <h2>1M+</h2>
          <p>Candidates</p>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
