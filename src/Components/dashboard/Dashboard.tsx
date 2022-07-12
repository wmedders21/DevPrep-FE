import React from "react";
import Nav from "../nav/Nav";
import Card from "../card/Card";
// const cardsData = require('../../mock-data/getUsersCards.json')
// const userData = require('../../mock-data/loginUserResponse.json')

const Dashboard = () => {
    // const [user, setUser] = useState(userData.data)

  return (
    <div className="dashboard">
      <Nav />
      <h1>Michael Putnam</h1>
      <div className="deck-container">
        <div className="deck-1"></div>
        <div className="deck-2"></div>
        <div className="deck-3"></div>
      </div>
      <div className="statistics-container">
        <p>Technical Preparedness: 4.5</p>
        <p>Behavioral Preparedness: 3.2</p>
      </div>
      <div className="flashcard-of-the-day">
        < Card />
      </div>
    </div>
  );
};

export default Dashboard;
