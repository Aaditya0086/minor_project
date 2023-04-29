// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const Request = () => {
//   const [requests, setRequests] = useState([])
//   const [approvedRequests, setApprovedRequests] = useState([])

//   useEffect(() => {
//     axios.get("http://localhost:5000/student-form")
//       .then((response) => {
//         setRequests(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleApprove = (request) => {
//     // Add the request to the approved requests
//     setApprovedRequests(approvedRequests => [...approvedRequests, request])

//     // Remove the request from the pending requests
//     setRequests(requests.filter(item => item.id !== request.id))
//   }

//   const handleDeny = (request) => {
//     // Remove the request from the pending requests
//     setRequests(requests.filter(item => item.id !== request.id))
//   }

//   return (
//     <div>
//       <h1>Project Requests</h1>
//       {requests.length === 0 && <p>No project requests to review.</p>}
//       {requests.map(request => (
//         <div key={request.id}>
//           <h3>{request.projectName}</h3>
//           <p>Student: {request.name}</p>
//           <p>Description: {request.projectDescription}</p>
//           <button onClick={() => handleApprove(request)}>Approve</button>
//           <button onClick={() => handleDeny(request)}>Deny</button>
//         </div>
//       ))}
//       {approvedRequests.length > 0 && (
//         <div>
//           <h2>Approved Requests</h2>
//           {approvedRequests.map(request => (
//             <div key={request.id}>
//               <h3>{request.projectName}</h3>
//               <p>Student: {request.name}</p>
//               <p>Description: {request.projectDescription}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Request

// import React from 'react';

// const RequestAction = () => {
//   // Sample data
//   const students = [
//     { name: 'Aaditya', team: 'Team A', project: 'Project Allocation System' },
//     { name: 'Shivang', team: 'Team B', project: 'Project Allocation System' },
//     // { name: 's3', team: 'Team A', project: 'Project 1' },
//     // { name: 's4', team: 'Team C', project: 'Project 3' },
//   ];

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Student Name</th>
//             <th>Team Name</th>
//             <th>Project Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <tr key={index}>
//               <td>{student.name}</td>
//               <td>{student.team}</td>
//               <td>{student.project}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RequestAction;

// import React from 'react';
// import './requestAction.css';

// const RequestAction = () => {
//   // Sample data
//   const students = [
//     { name: 'Aaditya', team: 'Team A', project: 'Project Allocation System' },
//     { name: 'Shivang', team: 'Team A', project: 'Project Allocation System' },
//     { name: 'John', team: 'Team B', project: 'Project Management Tool' },
//     { name: 'Jane', team: 'Team B', project: 'Project Management Tool' },
//     { name: 'Alex', team: 'Team C', project: 'E-commerce Website' },
//     { name: 'Emma', team: 'Team C', project: 'E-commerce Website' },
//   ];

//   // Group students by team
//   const groupedStudents = students.reduce((groups, student) => {
//     const { team } = student;
//     if (!groups[team]) {
//       groups[team] = [];
//     }
//     groups[team].push(student);
//     return groups;
//   }, {});

//   return (
//     <div className='app__ra'>
//     <div className="team-container">
//       {Object.entries(groupedStudents).map(([team, students]) => (
//         <div className="team" key={team}>
//           <h2 className="team-name">{team}</h2>
//           <table className="students-table">
//             <thead>
//               <tr>
//                 <th className="table-header">Student Name</th>
//                 <th className="table-header">Project Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student, index) => (
//                 <tr key={index}>
//                   <td className="table-data">{student.name}</td>
//                   <td className="table-data">{student.project}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default RequestAction;

// import React from 'react';
// import './requestAction.css';

// const RequestAction = () => {
//   // Sample data
//   const students = [
//     { name: 'Aaditya', team: 'Team 1', project: 'Project Allocation System' },
//     { name: 'Shivang', team: 'Team 1', project: 'Project Allocation System' },
//     { name: 'Shivam', team: 'Team 2', project: 'Project Management Tool' },
//     { name: 'Rohan', team: 'Team 2', project: 'Project Management Tool' },
//     { name: 'Surya', team: 'Team 3', project: 'E-commerce Website' },
//     { name: 'Tushar', team: 'Team 3', project: 'E-commerce Website' },
//   ];

//   // Group students by team
//   const groupedStudents = students.reduce((groups, student) => {
//     const { team } = student;
//     if (!groups[team]) {
//       groups[team] = [];
//     }
//     groups[team].push(student);
//     return groups;
//   }, {});

//   const handleAccept = (team) => {
//     console.log(`Accepted request for team ${team}`);
//     // TODO: implement accept logic here
//   };

//   const handleReject = (team) => {
//     console.log(`Rejected request for team ${team}`);
//     // TODO: implement reject logic here
//   };

//   const handleDiscuss = (team) => {
//     console.log(`Discussed request for team ${team}`);
//     // TODO: implement discuss logic here
//   };

//   return (
//     <div className="app__ra">
//       <div>
//         <h1 className='app__ra-heading'>Requests</h1>
//       </div>
//       <hr />
//       <div className="team-container">
//         {Object.entries(groupedStudents).map(([team, students]) => (
//           <div className="team" key={team}>
//             <h2 className="team-name">{team}</h2>
//             <table className="students-table">
//               <thead>
//                 <tr>
//                   <th className="table-header">Student Name</th>
//                   <th className="table-header">Project Name</th>
//                   <th className="table-header">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map((student, index) => (
//                   <tr key={index}>
//                     <td className="table-data">{student.name}</td>
//                     <td className="table-data">{student.project}</td>
//                     <td className="table-data">
//                       <button className="accept-btn" onClick={() => handleAccept(team)}>
//                         Accept
//                       </button>
//                       <button className="reject-btn" onClick={() => handleReject(team)}>
//                         Reject
//                       </button>
//                       <button className="discuss-btn" onClick={() => handleDiscuss(team)}>
//                         Discuss
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RequestAction;

import React, { useState } from "react";
import "./requestAction.css";

const RequestAction = () => {
  // Sample data
  const students = [
    { name: "Surya", team: "Team 1", project: "E-commerce Website" },
    { name: "Tushar", team: "Team 1", project: "E-commerce Website" },
    { name: "Shivam", team: "Team 2", project: "Project Management Tool" },
    { name: "Rohan", team: "Team 2", project: "Project Management Tool" },
    { name: "Aaditya", team: "Team 3", project: "Project Allocation System" },
    { name: "Shivang", team: "Team 3", project: "Project Allocation System" },
  ];

  // Group students by team
  const groupedStudents = students.reduce((groups, student) => {
    const { team } = student;
    if (!groups[team]) {
      groups[team] = [];
    }
    groups[team].push(student);
    return groups;
  }, {});

  // State to keep track of clicked buttons for each team
  const [clickedButtons, setClickedButtons] = useState({});

  const handleAccept = (team) => {
    console.log(`Accepted request for team ${team}`);
    // TODO: implement accept logic here
    setClickedButtons({ ...clickedButtons, [team]: "accept" });
  };

  const handleReject = (team) => {
    console.log(`Rejected request for team ${team}`);
    // TODO: implement reject logic here
    setClickedButtons({ ...clickedButtons, [team]: "reject" });
  };

  const handleDiscuss = (team) => {
    console.log(`Discussed request for team ${team}`);
    // TODO: implement discuss logic here
    setClickedButtons({ ...clickedButtons, [team]: "discuss" });
  };

  return (
    <div className="app__ra">
      <div>
        <h1 className="app__ra-heading">Requests</h1>
      </div>
      <hr />
      <div className="team-container">
        {Object.entries(groupedStudents).map(([team, students]) => (
          <div className="team" key={team}>
            <h2 className="team-name">{team}</h2>
            <table className="students-table">
              <thead>
                <tr>
                  <th className="table-header">Student Name</th>
                  <th className="table-header">Project Name</th>
                  <th className="table-header">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => {
                  const isAcceptClicked = clickedButtons[team] === "accept";
                  const isRejectClicked = clickedButtons[team] === "reject";
                  const isDiscussClicked = clickedButtons[team] === "discuss";
                  return (
                    <tr key={index}>
                      <td className="table-data">{student.name}</td>
                      <td className="table-data">{student.project}</td>
                      <td className="table-data">
                        <button
                          className={`accept-btn ${
                            isAcceptClicked ? "hide" : ""
                          }`}
                          onClick={() => handleAccept(team)}
                        >
                          Accept
                        </button>
                        <button
                          className={`reject-btn ${
                            isRejectClicked ? "hide" : ""
                          }`}
                          onClick={() => handleReject(team)}
                        >
                          Reject
                        </button>
                        <button
                          className={`discuss-btn ${
                            isDiscussClicked ? "hide" : ""
                          }`}
                          onClick={() => handleDiscuss(team)}
                        >
                          Discuss
                        </button>
                        {isAcceptClicked && (
                          <span className="success-msg">Request Accepted!</span>
                        )}
                        {isRejectClicked && (
                          <span className="error-msg">Request Rejected!</span>
                        )}
                        {isDiscussClicked && (
                          <span className="info-msg">Request to be Discussed!</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestAction;

// import React, { useState } from "react";
// import "./requestAction.css";

// const RequestAction = () => {
//   // Sample data
//   const students = [
//     { name: "Aaditya", team: "Team 1", project: "Project Allocation System" },
//     { name: "Shivang", team: "Team 1", project: "Project Allocation System" },
//     { name: "Shivam", team: "Team 2", project: "Project Management Tool" },
//     { name: "Rohan", team: "Team 2", project: "Project Management Tool" },
//     { name: "Surya", team: "Team 3", project: "E-commerce Website" },
//     { name: "Tushar", team: "Team 3", project: "E-commerce Website" },
//   ];

//   // Group students by team
//   const groupedStudents = students.reduce((groups, student) => {
//     const { team } = student;
//     if (!groups[team]) {
//       groups[team] = [];
//     }
//     groups[team].push(student);
//     return groups;
//   }, {});

//   // State variables for button states
//   const [acceptEnabled, setAcceptEnabled] = useState(true);
//   const [rejectEnabled, setRejectEnabled] = useState(true);
//   const [discussEnabled, setDiscussEnabled] = useState(true);

//   const handleAccept = (team) => {
//     console.log(`Accepted request for team ${team}`);
//     // TODO: implement accept logic here
//     setAcceptEnabled(false);
//     setRejectEnabled(true);
//     setDiscussEnabled(true);
//   };

//   const handleReject = (team) => {
//     console.log(`Rejected request for team ${team}`);
//     // TODO: implement reject logic here
//     setAcceptEnabled(true);
//     setRejectEnabled(false);
//     setDiscussEnabled(true);
//   };

//   const handleDiscuss = (team) => {
//     console.log(`Discussed request for team ${team}`);
//     // TODO: implement discuss logic here
//     setAcceptEnabled(true);
//     setRejectEnabled(true);
//     setDiscussEnabled(false);
//   };

//   return (
//     <div className="app__ra">
//       <div>
//         <h1 className="app__ra-heading">Requests</h1>
//       </div>
//       <hr />
//       <div className="team-container">
//         {Object.entries(groupedStudents).map(([team, students]) => (
//           <div className="team" key={team}>
//             <h2 className="team-name">{team}</h2>
//             <table className="students-table">
//               <thead>
//                 <tr>
//                   <th className="table-header">Student Name</th>
//                   <th className="table-header">Project Name</th>
//                   <th className="table-header">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map((student, index) => (
//                   <tr key={index}>
//                     <td>{student.name}</td>
//                     <td>{student.project}</td>
//                     <td>
//                       <button
//                         className="accept-btn"
//                         disabled={!acceptEnabled}
//                         onClick={() => handleAccept(team)}
//                       >
//                         Accept
//                       </button>
//                       <button
//                         className="reject-btn"
//                         disabled={!rejectEnabled}
//                         onClick={() => handleReject(team)}
//                       >
//                         Reject
//                       </button>
//                       <button
//                         className="discuss-btn"
//                         disabled={!discussEnabled}
//                         onClick={() => handleDiscuss(team)}
//                       >
//                         Discuss
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RequestAction;
