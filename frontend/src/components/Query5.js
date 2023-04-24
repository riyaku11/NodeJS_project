
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./component.css";


function Query5() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users/top-cities");
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="component">
      <h1>Show the data of top 10 cities which have the highest number of users and their average income</h1>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>User Count</th>
            <th>Average Income</th>
            
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.userCount}</td>
              <td>{user.avgIncome}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Query5;
