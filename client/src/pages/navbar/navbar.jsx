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





import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';



const Navbar = ({ user, userType }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            MUJ
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              {userType === 'admin' && (
                <>
                <li className="nav-item">
                  <Link className="nav-link" to={'/admin/profile'}>
                    Profile
                  </Link>
                </li>
                </>
              )}
              {userType === 'user' && (
                <>
                <li className="nav-item">
                  <Link className="nav-link" to={'/user/profile'}>
                    Profile
                  </Link>
                </li>
                </>
              )}
              {!user && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/sign-in'}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/sign-up'}>
                      Sign up
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to={'/sign-up'}>
                      profile
                    </Link>
                  </li> */}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
