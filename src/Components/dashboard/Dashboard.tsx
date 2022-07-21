import React, { useState, useEffect, useRef, useContext } from "react";
import { Navigate } from "react-router-dom";
import "./Dashboard.scss";
import Nav from "../nav/Nav";
import StatsChart from "../stats-chart/statsChart";
import { UserContext } from "../../Context";
import { CurrentUser } from "../../interface";
import Card from "../card/Card";
import Decks from "../decks/Decks";
import { getQuote, updateUser } from '../../apiCalls/apiCalls'

type StatsData = {
  labels: string[];
  datasets: {
    label: string;
    data: any[];
    backgroundColor: string[];
    borderColor: string;
    borderWidth: number;
  }[];
};

type CwStats = {
  cwUsername: string;
  cwLeaderboardPosition: number;
  totalCompleted: number;
  languageRanks: {
    java: number;
    ruby: number;
  };
};

type Options = {
  scales: {
    x: {
      grid: {
        display: boolean;
      };
    };
    y: {
      grid: {
        display: boolean;
      };
    };
  };
};

const options: Options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const Dashboard: React.FC = () => {
  const { user, setUser }: CurrentUser = useContext(UserContext);
  const [username, setUsername] = useState<string | undefined>(
    null
  );
  const [statsData, setStatsData] = useState<StatsData>({
    labels: Object.keys(user.data.attributes.preparednessRating).map(
      (key) => key
    ),
    datasets: [
      {
        label: "Preparedness Level",
        data: Object.keys(user.data.attributes.preparednessRating).map(
          (key) => user.data.attributes.preparednessRating[key]
        ),
        backgroundColor: ["red", "green", "blue"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [cwStats, setCWStats] = useState<CwStats>(
    user.data.attributes.cwAttributes
  );
  const [cwUsername, setCWUsername] = useState<string>('');
  const [quote, setQuote] = useState<string>('')
  
  useEffect(() => {
    getQuote().then((data) => setQuote(`"${data.Quote}" - ${data.Author}`));
  }, []);

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  const updateCWAccess = () => {
    const body = {
      "codewarsUsername": cwUsername
    }
    updateUser(body, Number(user.data.userId))
    .then(data => setUser(data))
  }

  const renderCodewarsStats = () => {
    const languageRanks = () => {
      let languageKeys: string[] = Object.keys(cwStats.languageRanks);
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
        <p>Username: {cwStats.cwUsername}</p>
        <ul>
          <h3>Language Ranks:</h3>
          {languageRanks()}
        </ul>
        <p>Leader Board Position: {cwStats.cwLeaderboardPosition}</p>
        <p>Total Completed Challenges: {cwStats.totalCompleted}</p>
      </div>
    );
  };

  const handleFormSubmission = (e: any): void => {
    e.preventDefault();
    updateCWAccess();
    setCWStats({
      ...cwStats,
      cwUsername: cwUsername,
    });
  };

  const renderForm = () => {
    return (
      <form onSubmit={(e) => handleFormSubmission(e)}>
        <h2 className="form-header">Link Your Codewars Account</h2>
        <input
          required
          type="text"
          name="username"
          placeholder="Username"
          value={cwUsername}
          onChange={(e) => setCWUsername(e.target.value)}
        />
        <input type="submit" value="Submit" className="cw-submit-button" />
      </form>
    );
  };

  return (
    <div className="all-dashboard">
      <Nav />
      <div className="dashboard">
        <h1 className="username">
          <span>Hello,</span> {user.data.attributes.username}!
        </h1>
        <div className="flashcard-statistics">
          <StatsChart chartData={statsData} options={options} />
        </div>
        <div className="codewars-container">
          {cwStats.cwUsername ? renderCodewarsStats() : renderForm()}
        </div>
        <Decks style="dashboard" />
        <Card quote={quote} />
      </div>
    </div>
  );
};

export default Dashboard;
