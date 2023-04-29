// import React from 'react'
// import './ConsentForm.css';
// import { useSelector } from 'react-redux';

// export default function ConsentForm() {

//     const { userData } = useSelector((state) => state.user)


//     const handleHereClick = () => {
//         // history.push('/pending project')
//         window.location.href = './student-form';
//       };

//   return (
//     <div className='app__cf'>
//       <div className='app__cf-background-img'>
//       <img
//           src="https://mujslcm.jaipur.manipal.edu:122/keen/themes/keen/theme/demo1/dist/assets/media/misc/collage.png"
//           alt="background-img"
//         />
//       </div>
//       <div className="app__userhome-text">
//           <p>Name</p>
//           <h3>{userData && userData.name}</h3>
//           </div>
//           {/* <div>
//           <p>Email</p>
//           <h3>{userData && userData.email}</h3>
//           </div> */}
//           <hr />
//           <div className="app__userhome-text">
//           {/* <h5>Hello, {userData && userData.name}. Welcome to your Dashboard.</h5> */}
//           <h5>Hello, {userData && userData.name}. You have a pending project-teacher consent form. Please click <button onClick={handleHereClick} type="button" className="app__userhome-text-btn">here</button> to complete it.</h5>
//           </div>
//           {/* <br /> */}
//     </div>
//   )
// }

import React, { useState } from 'react'
import './ConsentForm.css';
import { useSelector } from 'react-redux';
import StudentForm from "../studentForm/studentForm"

export default function ConsentForm() {

  const { userData } = useSelector((state) => state.user)

  // Check if the form has been submitted
  const isFormSubmitted = localStorage.getItem('formSubmitted') === 'true';
  
  
  const handleHereClick = () => {
    // Redirect to the form page
    // window.location.href = {isFormSubmitted ? './'};
    window.location.href = url;
    // window.location.href = './student-form';
  };
  
  
  const url = isFormSubmitted ? './' : './student-form';

  return (
    <div className='app__cf'>
      <div className='app__cf-background-img'>
        <img
          src="https://mujslcm.jaipur.manipal.edu:122/keen/themes/keen/theme/demo1/dist/assets/media/misc/collage.png"
          alt="background-img"
        />
      </div>
      <div className="app__cf-text">
          <p>Name</p>
          <h3>{userData && userData.name}</h3>
          </div>
          {/* <div>
          <p>Email</p>
          <h3>{userData && userData.email}</h3>
          </div> */}
          <hr />
      <div className="app__cf-text">
        <h5>Hello, {userData && userData.name}. {isFormSubmitted ? 'Your form submission is complete. Click ' : 'You have a pending project-teacher consent form. Please click '}
          <button onClick={handleHereClick} type="button" className="app__cf-text-btn">{isFormSubmitted ? 'here' : 'here'}</button> 
          {isFormSubmitted ? ' to return to your dashboard.' : ' to complete it.'}</h5>
      </div>
    </div>
  )
}








// import React, { useState } from 'react';
// import './ConsentForm.css';
// import { useSelector, useDispatch } from 'react-redux';

// export default function ConsentForm() {
//   const { userData } = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   // Add a state variable to track if the form has been submitted
//   const [submitted, setSubmitted] = useState(false);

//   const handleHereClick = async () => {
//     // Submit the data to the server
//     try {
//       const response = await fetch('/submit-consent-form', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ userId: userData.id }),
//       });
//       if (response.ok) {
//         // If the server response is successful, update the state
//         setSubmitted(true);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className='app__cf'>
//       <div className='app__cf-background-img'>
//         <img
//           src='https://mujslcm.jaipur.manipal.edu:122/keen/themes/keen/theme/demo1/dist/assets/media/misc/collage.png'
//           alt='background-img'
//         />
//       </div>
//       <div className='app__userhome-text'>
//         <p>Name</p>
//         <h3>{userData && userData.name}</h3>
//       </div>
//       <hr />
//       <div className='app__userhome-text'>
//         <h5>
//           Hello, {userData && userData.name}.
//           {submitted ? (
//             <span> Your consent form has been submitted.</span>
//           ) : (
//             <span>
//               You have a pending project-teacher consent form. Please click{' '}
//               <button
//                 onClick={handleHereClick}
//                 type='button'
//                 className='app__userhome-text-btn'
//               >
//                 here
//               </button>{' '}
//               to complete it.
//             </span>
//           )}
//         </h5>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import './ConsentForm.css';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// export default function ConsentForm() {
//   const { userData } = useSelector((state) => state.user);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleHereClick = () => {
//     // history.push('/pending project')
//     window.location.href = './student-form';
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Construct the student form data object here. Example:
//     const formData = {
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//       // Add other form fields here
//     };

//     try {
//       // Send the form data to your API endpoint
//       const response = await axios.post('/api/submit-student-form', formData);
      
//       // If submission is successful, set isSubmitted to true
//       setIsSubmitted(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className='app__cf'>
//       <div className='app__cf-background-img'>
//         <img
//           src='https://mujslcm.jaipur.manipal.edu:122/keen/themes/keen/theme/demo1/dist/assets/media/misc/collage.png'
//           alt='background-img'
//         />
//       </div>
//       <div className='app__userhome-text'>
//         <p>Name</p>
//         <h3>{userData && userData.name}</h3>
//       </div>
//       <hr />
//       <div className='app__userhome-text'>
//         {isSubmitted ? (
//           <h5>Submitted</h5>
//         ) : (
//           <h5>
//             Hello, {userData && userData.name}. You have a pending project-teacher
//             consent form. Please click{' '}
//             <button onClick={handleHereClick} type='button' className='app__userhome-text-btn'>
//               here
//             </button>{' '}
//             to complete it.
//           </h5>
//         )}
//       </div>
//       {!isSubmitted && (
//         <form onSubmit={handleSubmit}>
//           {/* Add your form fields here */}
//           <button type='submit'>Submit</button>
//         </form>
//       )}
//     </div>
//   );
// }
