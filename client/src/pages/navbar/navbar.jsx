// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css';

// const Navbar = ({ user, userType }) => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={'/sign-in'}>
//               MUJ
//             </Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 {/* <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-in'}>
//                     Login
//                   </Link>
//                 </li> */}
//                 {/* <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-up'}>
//                     Sign up
//                   </Link>
//                 </li> */}
//               </ul>
//             </div>
//           </div>
//         </nav>
//     </>
//   )
// }

// export default Navbar

// import React from 'react';
// import { Link } from 'react-router-dom';
// // import { FaUserCircle } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = ({ user, userType }) => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={'/sign-in'}>
//             MUJ
//           </Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               {user && userType && (
//                 <li className="nav-item">
//                   <Link className="nav-link" to={`/profile/${userType}`}>
//                     {user}
//                   </Link>
//                 </li>
//               )}
//             </ul>
//             {user && userType && (
//               <div className="ml-auto">
//                 <Link to={`/profile/${userType}`}>
//                   {/* <FaUserCircle className="navbar-icon" /> */}
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// // import { FaUserCircle } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = ({ user, userType }) => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={'/sign-in'}>
//             MUJ
//           </Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               {user && userType && (
//                 <li className="nav-item">
//                   <Link className="nav-link" to={`/profile/${userType}`}>
//                     {user}
//                   </Link>
//                 </li>
//               )}
//             </ul>
//             {user && userType && (
//               <div className="ml-auto">
//                 <Link to={`/profile/${userType}`}>
//                   {/* <FaUserCircle className="navbar-icon" /> */}
//                   <button className="btn btn-outline-secondary">Profile</button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css';

// const Navbar = ({ user, userType }) => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={'/'}>
//             MUJ
//           </Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               {userType === 'admin' && (
//                 <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/admin/profile'}>
//                     Profile
//                   </Link>
//                 </li>
//                 </>
//               )}
//               {userType === 'user' && (
//                 <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/user/profile'}>
//                     Profile
//                   </Link>
//                 </li>
//                 </>
//               )}
//               {!user && (
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to={'/sign-in'}>
//                       Login
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to={'/sign-up'}>
//                       Sign up
//                     </Link>
//                   </li>
//                   {/* <li className="nav-item">
//                     <Link className="nav-link" to={'/sign-up'}>
//                       profile
//                     </Link>
//                   </li> */}
//                 </>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }

//export default Navbar

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'; // import the search icon
// import './Navbar.css';

// const Navbar = ({ user, userType }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//       <div className="container">
//         <Link className="navbar-brand" to={'/'}>
//           MUJ
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarTogglerDemo02"
//           aria-controls="navbarTogglerDemo02"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <form className="form-inline">
//                 <div className="input-group">
//                   <input type="text" className="form-control" placeholder="Search" />
//                   <div className="input-group-append">
//                     <span className="input-group-text">
//                       <FontAwesomeIcon icon={faSearch} />
//                     </span>
//                   </div>
//                 </div>
//               </form>
//             </li>
//             <li className="nav-item">
//             <a
//   className="nav-link"
//   href="#"
//   data-toggle="dropdown"
// >
//   <FontAwesomeIcon icon={faUser} />
// </a>
// <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//   {userType === 'admin' && (
//     <Link className="dropdown-item" to={'/teacher-profile'}>
//       Admin Profile
//     </Link>
//   )}
//   {userType === 'user' && (
//     <Link className="dropdown-item" to={'/student-profile'}>
//       User Profile
//     </Link>
//   )}
// </div>

//             </li>
//             {!user && (
//               <>
//                 {/* <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-in'}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-up'}>
//                     Sign up
//                   </Link>
//                 </li> */}
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
// import './Navbar.css';

// const Navbar = ({ user, userType }) => {
//   const history = useHistory();

//   const handleProfileClick = () => {
//     if (userType === 'admin') {
//       history.push('/teacher-profile');
//     } else if (userType === 'user') {
//       history.push('/student-profile');
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//       <div className="container">
//         <Link className="navbar-brand" to={'/'}>
//           MUJ
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarTogglerDemo02"
//           aria-controls="navbarTogglerDemo02"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <form className="form-inline">
//                 <div className="input-group">
//                   <input type="text" className="form-control" placeholder="Search" />
//                   <div className="input-group-append">
//                     <span className="input-group-text">
//                       <FontAwesomeIcon icon={faSearch} />
//                     </span>
//                   </div>
//                 </div>
//               </form>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="#"
//                 data-toggle="collapse"
//                 data-target=".navbar-collapse.show"
//                 onClick={handleProfileClick}
//               >
//                 <FontAwesomeIcon icon={faUser} />
//               </a>
//             </li>
//             {!user && (
//               <>
//                 {/* <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-in'}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-up'}>
//                     Sign up
//                   </Link>
//                 </li> */}
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = ({ user, userType = "user" }) => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  console.log("userType:", userData && userData.userType);

  const [searchValue, setSearchValue] = useState("");
const handleSearch = (e) => {
  e.preventDefault();
  if (searchValue.trim() !== "") {
    navigate(`/search?query=${searchValue}`);
  }
};


  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MUJ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <ul className="navbar-nav ml-auto">
            <div className="navbar-items-main-container">
              {userData && userData.userType === "admin" && (
                <div className="navbar-items">
                  <li className="nav-item">
                    <form className="form-inline">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text"
                            onClick={() => {
                              if (searchQuery.trim() !== "") {
                                navigate(`/search?query=${searchQuery}`);
                              }
                            }}
                          >
                            <FontAwesomeIcon icon={faSearch} />
                          </span>
                        </div>
                      </div>
                    </form>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"./request-action"}>
                      Requests
                    </Link>
                  </li>

                  <a className="nav-link" href="./teacher-profile">
                    <FontAwesomeIcon icon={faUser} />
                  </a>
                </div>
              )}
              {userData && userData.userType === "user" && (
                <div className="navbar-items">
                  <li className= "nav-item">
<form className="form-inline" onSubmit={handleSearch}>
<div className="input-group">
<input
type="text"
className="form-control"
placeholder="Search"
value={searchValue}
onChange={(e) => setSearchValue(e.target.value)}
/>
<div className="input-group-append">
<span className="input-group-text">
<FontAwesomeIcon icon={faSearch} />
</span>
</div>
</div>
</form>
</li>
<li className="nav-item">
<Link className="nav-link" to={"/consent-forms"}>
Consent Forms
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to={"/request-status"}>
Request Status
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to={"/student-profile"}>
<FontAwesomeIcon icon={faUser} />
</Link>
</li>
</div>
)}
</div>
{!user && (
          <>
            {/* <li className="nav-item">
                <Link className="nav-link" to={'/sign-in'}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  Sign up
                </Link>
              </li> */}
          </>
        )}
      </ul>
    </div>
  </div>
</nav>
);
};

export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";
// import { useSelector } from "react-redux";
// import axios from "axios";

// const Navbar = ({ user, userType = "user" }) => {
//   const { userData } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const [searchValue, setSearchValue] = useState("");
//   const [searchResult, setSearchResult] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (searchValue.trim() !== "") {
//       try {
//         const res = await axios.get(`/api//search?q=${searchValue}`);
//         setSearchResult(res.data.results);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   useEffect(() => {
//     const handleOutsideClick = () => {
//       setSearchResult([]);
//     };

//     window.addEventListener("click", handleOutsideClick);

//     return () => {
//       window.removeEventListener("click", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           MUJ
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarTogglerDemo02"
//           aria-controls="navbarTogglerDemo02"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div>
//           <ul className="navbar-nav ml-auto">
//             <div className="navbar-items-main-container">
//               {userData && userType === "admin" && (
//                 <div className="navbar-items">
//                   <li className="nav-item">
//                     <form className="form-inline">
//                       <div className="input-group">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Search"
//                           value={searchValue}
//                           onChange={(e) => setSearchValue(e.target.value)}
//                         />
//                         <div className="input-group-append">
//                           <span
//                             className="input-group-text"
//                             onClick={handleSearch}
//                           >
//                             <FontAwesomeIcon icon={faSearch} />
//                           </span>
//                         </div>
//                       </div>
//                       {searchResult.length > 0 && (
//                         <div className="search-results">
//                           {searchResult.map((result) => (
//                             <div
//                               key={result._id}
//                               onClick={() => {
//                                 setSearchResult([]);
//                                 navigate(`/students/${result._id}`);
//                               }}
//                             >
//                               {result.name} ({result.registrationNumber})
//                             </div>
//                             ))}
//                             </div>
//                             )}
//                             </form>
//                             </li>
//                             <li className="nav-item">
//                             <Link className="nav-link" to={"./requests"}>
//                             Requests
//                             </Link>
//                             </li>
//                             <a className="nav-link" href="./teacher-profile">
//                 <FontAwesomeIcon icon={faUser} />
//               </a>
//             </div>
//           )}
//           {userData && userData.userType === "user" && (
//             <div className="navbar-items">
//               <li className="nav-item">
//                 <form className="form-inline" onSubmit={handleSearch}>
//                   <div className="input-group">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Search"
//                       value={searchValue}
//                       onChange={(e) => setSearchValue(e.target.value)}
//                     />
//                     <div className="input-group-append">
//                       <button
//                         type="submit"
//                         className="btn btn-outline-secondary"
//                       >
//                         Search
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//                 {searchResult.length > 0 ? (
//                   <div className="search-result-container">
//                     {searchResult.map((result) => (
//                       <div key={result._id} className="search-result-item">
//                         <p>Name: {result.name}</p>
//                         <p>Registration Number: {result.registrationNumber}</p>
//                         {/* Add other fields here as necessary */}
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   searchValue && <p>No results found</p>
//                 )}
//               </li>
//             </div>
//           )}
//           {!userData && (
//             <div className="navbar-items">
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/login"}>
//                   Login
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/signup"}>
//                   Signup
//                 </Link>
//               </li>
//             </div>
//           )}
//           {userData && (
//             <div className="navbar-items">
//               <li className="nav-item">
//                 <Link className="nav-link" to={`/profile/${userData._id}`}>
//                   Profile
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/logout"}>
//                   Logout
//                 </Link>
//               </li>
//             </div>
//           )}
//         </div>
//       </ul>
//     </div>
//   </div>
// </nav>

// );
// };

// export default Navbar;