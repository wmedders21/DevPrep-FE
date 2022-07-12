import React, { useContext } from 'react';
import UserContext from '../../UserContext';

const Dashboard = () => {
  const currentUser = useContext(UserContext)
    return (
        <div>
            <h1>DASHBOARD</h1>
        </div>
    );
}

export default Dashboard;
