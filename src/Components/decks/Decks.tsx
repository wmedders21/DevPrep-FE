import React from "react";
import "./Decks.scss";
import { NavLink } from "react-router-dom";

const Decks = ({ style, allDecks }: { style: string; allDecks?: any }) => {
  const renderDashboardDeckList = () => (
    <div className={`${style}-deck-container`}>
      <ul className={`${style}-deck-list`}>
        <h2>Choose Your Deck</h2>
        <NavLink
          className={({ isActive }) => {
            return "nav-link" + (isActive ? " selected" : "");
          }}
          to="/flashcards/behavioralCards"
        >
          Behavioral
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return "nav-link" + (isActive ? " selected" : "");
          }}
          to="/flashcards/FEtechnicalCards"
        >
          Technical FE
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return "nav-link" + (isActive ? " selected" : "");
          }}
          to="/flashcards/BEtechnicalCards"
        >
          Technical BE
        </NavLink>
      </ul>
    </div>
  );

  const renderFlashcardPageDeckList = () => {
    if (!allDecks) {
      return;
    }
    return (
      <div className={`${style}-deck-container`}>
        <ul className={`${style}-deck-list`}>
          <NavLink
            className={({ isActive }) => {
              return "nav-link" + (isActive ? " selected" : "");
            }}
            to="/flashcards/behavioralCards"
          >
            <h3>Behavioral</h3>
            <p style={{ fontSize: "2vh" }}>
              Flashcards: {allDecks["behavioralCards"].length}
            </p>
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              return "nav-link" + (isActive ? " selected" : "");
            }}
            to="/flashcards/FEtechnicalCards"
          >
            {" "}
            <h3>Technical Front End</h3>
            <p style={{ fontSize: "2vh" }}>
              Flashcards: {allDecks["FEtechnicalCards"].length}
            </p>
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              return "nav-link" + (isActive ? " selected" : "");
            }}
            to="/flashcards/BEtechnicalCards"
          >
            <h3>Technical Back End</h3>
            <p style={{ fontSize: "2vh" }}>
              Flashcards: {allDecks["BEtechnicalCards"].length}
            </p>
          </NavLink>
        </ul>
      </div>
    );
  };

  return (
    <>
      {style === "flashcards"
        ? renderFlashcardPageDeckList()
        : renderDashboardDeckList()}
    </>
  );
};

export default Decks;
