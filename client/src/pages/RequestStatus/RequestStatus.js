import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './request.css';

const RequestStatus = () => {
  const [status, setStatus] = useState(null);
  
  useEffect(() => {
    // Make an API call to check the status of the request
    axios.get('/api/request/status')
      .then(res => {
        setStatus(res.data.status);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (  
    <div className="request-status-container">
      {status === null && <p>Loading...</p>}
      {status === 'pending' && <p>Your request is pending.</p>}
      {status === 'approved' && <p>Your request has been approved.</p>}
      {status === 'rejected' && <p>Your request has been rejected.</p>}
    </div>
  );
};

export default RequestStatus;
