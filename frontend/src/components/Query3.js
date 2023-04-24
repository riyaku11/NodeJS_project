
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./component.css";


function Query3() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users/email-contains-lastname");
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="component">
      <h1>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
            <th>Income Value</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user._id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.income}</td>
              <td>{user.city}</td>
              <td>{user.car}</td>
              <td>{user.quote}</td>
              <td>{user.phone_price}</td>
              <td>{user.incomeValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Query3;
