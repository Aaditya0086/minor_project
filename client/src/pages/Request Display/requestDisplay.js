import React, { useEffect, useState } from "react";
import axios from "axios";
import './RequestDisplay.css';

function Requests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch requests from server
    axios
      .get("http://localhost:3000/student-form")
      .then((response) => setRequests(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="app__display">
      <h1>Requests</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Project Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td>{request.name}</td>
              <td>{request.projectName}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Requests;
