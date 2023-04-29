import React, {useState} from 'react'
import '../studentProfile/Student.css';
import { useSelector } from 'react-redux';

export default function StudentProfile  ()  {
  const [searchQuery, setSearchQuery] = useState('');
  const { userData } = useSelector((state) => state.user);

  const studentData = Array.isArray(userData) && userData.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.regNo.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  

    const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value);
    };

    const loggedInUserData = userData && {
      name: userData.name,
      regNo: userData.regNo,
      email: userData.email,
      mobNo: userData.mobNo,
      section: userData.section,
      course: userData.course,
      branch: userData.branch,
      sem: userData.sem,
      year: userData.year,
    };
    

  return (
    <div className='app__sp'>
      <div className='app__sp-image'>
        <img src="https://mujslcm.jaipur.manipal.edu:122/keen/themes/keen/theme/demo1/dist/assets/media/misc/collage.png" alt="background_img" />
      </div>
      <div className='app__sp-heading'>
        <h1>PROFILE</h1>
      </div>
      <hr />
      {/* <div className='app__search'>
        <input type='text' placeholder='Search for a student...' value={searchQuery} onChange={handleSearchInputChange} />
      </div> */}
      <div className='app__sp-container-column'>
      {loggedInUserData && (
  <React.Fragment>
    <div className='app__sp-container-text'>
      <h4>Name:</h4>
      <p>{loggedInUserData.name}</p>
    </div>
    <div className='app__sp-container-text'>
      <h4>Reg-No.:</h4>
      <p>{loggedInUserData.regNo}</p>
    </div>
    <div className='app__sp-container-text'>
      <h4>Email:</h4>
      <p>{loggedInUserData.email}</p>
    </div>
    <div className='app__sp-container-text'>
      <h4>Mobile-No.:</h4>
      <p>{loggedInUserData.mobNo}</p>
    </div>
    <div className='app__sp-container-text'>
      <h4>Section:</h4>
      <p>{loggedInUserData.section}</p>
    </div>
    <div className='app__sp-container-text'>
      <h4>Course:</h4>
      <p>{loggedInUserData.course}</p>
    </div>
    <div className='app__sp-container-text'>
      <h4>Branch:</h4>
      <p>{loggedInUserData.branch}</p>
    </div>
    <div className='app__sp-container-text'>
      <h4>Semester:</h4>
      <p>{loggedInUserData.sem}</p>
    </div>
    <div className='app__sp-container-text'>
      <h4>Year:</h4>
      <p>{loggedInUserData.year}</p>
    </div>
    <hr />
  </React.Fragment>
)}
</div>
    </div>

  )
}
