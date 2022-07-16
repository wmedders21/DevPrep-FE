import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";

import "./Dashboard.scss";

import Nav from "../nav/Nav";
import Card from "../card/Card";
import StatsChart from "../stats-chart/statsChart";
const cardsData = require("../../mock-data/getUsersCards.json");
const userData = require("../../mock-data/login-user/loginUserRes.json");

const options = {
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }

  }
}

const Dashboard = () => {
  const [user, setUser] = useState(userData.data.attributes);
  const [username, setUsername] = useState(userData.data.attributes.username);

  const [statsData, setStatsData] = useState({
    labels: Object.keys(userData.data.attributes.preparednessRating).map(
      (key) => key
    ),
    datasets: [
      {
        label: "Preparedness Level",
        data: Object.keys(userData.data.attributes.preparednessRating).map(
          (key) => userData.data.attributes.preparednessRating[key]
          ),
        backgroundColor: ['red', 'green', 'blue'],
        borderColor: "black",
        borderWidth: 2,
      },
    ],

  });

  const [cwStats, setCWStats] = useState(userData.data.attributes.cwAttributes);

  const [cwUsername, setCWUsername] = useState("");
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  const renderCodewarsStats = () => {
    const languageRanks = () => {
      let languageKeys = Object.keys(cwStats.languageRanks);
      return languageKeys.map((language) => {
        return (
          <li key={Math.random() * 100}>
            {language}: {cwStats.languageRanks[language]}
          </li>
        );
      });
    };

    return (
      <div className="codewars-stats-container">
        <h2>Codewars Stats</h2>
        <p>Username: {cwStats.codewarsUsername}</p>
        <ul>
          <h3>Language Ranks:</h3>
          {languageRanks()}
        </ul>
        <p>Leader Board Position: {cwStats.cwLeaderboardPosition}</p>
        <p>Total Completed Challenges: {cwStats.totalCompleted}</p>
      </div>
    );
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setCWStats({
      ...cwStats,
      codewarsUsername: cwUsername,
    });
  };

  const renderForm = () => {
    return (
      <form onSubmit={(e) => handleFormSubmission(e)}>
        <h2 className="form-header">
          Would you like to Link your Codewars account?
        </h2>
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          value={cwUsername}
          onChange={(e) => setCWUsername(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  };

  return (
    <>
      <Nav />
      <div className="dashboard">
        <h1 className="username">
          <span>hello,</span> {username}
        </h1>

        <div className="flashcard-statistics">
          <StatsChart chartData={statsData} options={options} />
        </div>

        <div className="codewars-container">
          {cwStats.codewarsUsername ? renderCodewarsStats() : renderForm()}
        </div>

        <div className="dashboard-deck-container">
          <ul className="dashboard-deck-list">
            <Link to="/flashcards/behavioral">Behavior</Link>

            <Link to="/flashcards/technicalFE">Technical FE</Link>

            <Link to="/flashcards/technicalBE">Technical BE</Link>
          </ul>
        </div>

        <div className="flashcard-of-the-day">
          <Card />
        </div>
      </div>
      <div className="bottom-nav">
        <a href="https://github.com/2201-DevPrep">GitHub</a>
      </div>
    </>
  );
};

export default Dashboard;
