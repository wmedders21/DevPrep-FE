import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./Dashboard.scss";

import Nav from "../nav/Nav";
import Card from "../card/Card";
const cardsData = require("../../mock-data/getUsersCards.json");
const userData = require("../../mock-data/loginUserResponse.json");

console.log(userData.data.attributes);

const Dashboard = () => {
  const [user, setUser] = useState(userData.data.attributes);

  const [username, setUsername] = useState("");
  console.log(user["codewars_username"]);
  const renderCodewarsStats = () => {
    return <div>stats</div>;
  };

  const handleFormSubmission = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("button click");
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleFormSubmission}>
        <label>Would you like to Link your Codewars account?</label>
        <input
          required
          type="text"
          name="username"
          placeholder=" username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          {user["first_name"]} {user["last_name"]}
          <br></br>
          {user["codewars_username"] && (
            <span className="codewars-username">
              {user["codewars_username"]}
            </span>
          )}
        </h1>

        <div className="flashcard-statistics">
          <p>Technical FE Preparedness: 4.5</p>
          <p>Technical BE Preparedness: 3.5</p>
          <p>Behavioral Preparedness: 3.2</p>
        </div>
        {user["codewars_username"] ? renderCodewarsStats() : renderForm()}
        <div className="dashboard-deck-container">
          <ul className="dashboard-deck-list">
            <Link to="/flashcards/0">Behavior</Link>

            <Link to="/flashcards/1">Technical FE</Link>

            <Link to="/flashcards/2">Technical BE</Link>
          </ul>
        </div>

        <div className="flashcard-of-the-day">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
