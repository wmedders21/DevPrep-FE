import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";

import "./Dashboard.scss";

import Nav from "../nav/Nav";
import Card from "../card/Card";
const cardsData = require("../../mock-data/getUsersCards.json");
const userData = require("../../mock-data/login-user/loginUserRes.json");



const Dashboard = () => {
  const [user, setUser] = useState(userData.data.attributes);
  const [username, setUsername] = useState(userData.data.attributes.username);

  const [ cwStats, setCWStats ] = useState(userData.data.attributes.cwAttributes)

  const [cwUsername, setCWUsername] = useState('')
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  
  const renderCodewarsStats = () => {

    const languageRanks = () => {
      let languageKeys = Object.keys(cwStats.languageRanks)
      return languageKeys.map(language => {
        return (
          <li key={Math.random()*100}>
            {language}: {cwStats.languageRanks[language]}
          </li>
        )
      })
    }

    return (<div className="codewars-stats-container">
      <h2>Codewars Stats</h2>
        <p> Username: {cwStats.codewarsUsername}</p>
        <ul>
          <label>Language Ranks:</label>
          {languageRanks()}
        </ul>
        <p>Leader Board Position: {cwStats.cwLeaderboardPosition}</p>
        <p>Total Completed Challenges: {cwStats.totalCompleted}</p>
    </div>)
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setCWStats({
      ...cwStats,
      codewarsUsername: cwUsername
    })
  };

  const renderForm = () => {
    return (
      <form onSubmit={(e) => handleFormSubmission(e)}>
        <h2 className='form-header'>Would you like to Link your Codewars account?</h2>
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
          <p>Technical FE Preparedness: 4.5</p>
          <p>Technical BE Preparedness: 3.5</p>
          <p>Behavioral Preparedness: 3.2</p>
        </div>

        <div className='codewars-container'>
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
