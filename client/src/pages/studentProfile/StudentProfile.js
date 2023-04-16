import React from 'react'
import '../studentProfile/Student.css';
import { useSelector } from 'react-redux';

export default function StudentProfile  ()  {

    const { userData } = useSelector((state) => state.user);

  return (
    <div className='app__sp'>
      <div className='app__sp-image'>
        <img src="https://mujslcm.jaipur.manipal.edu:122/keen/themes/keen/theme/demo1/dist/assets/media/misc/collage.png" alt="background_img" />
      </div>
      <div className='app__sp-heading'>
        <h1>PROFILE</h1>
      </div>
      <hr />
      <div className='app__sp-container-column'>
            <div className='app__sp-container-text'>
                <h4>Name:</h4>
                <p>{userData && userData.name}</p>
            </div>
            <div className='app__sp-container-text'>
                <h4>Reg-No.:</h4>
                <p>{userData && userData.regNo}</p>
            </div>
            <div className='app__sp-container-text'>
                <h4>Email:</h4>
                <p>{userData && userData.email}</p>
            </div>
            <div className='app__sp-container-text'>
                <h4>Mobile-No.:</h4>
                <p>{userData && userData.mobNo}</p>
            </div>
            <div className='app__sp-container-text'>
                <h4>Section:</h4>
                <p>{userData && userData.section}</p>
            </div>
            <div className='app__sp-container-text'>
                <h4>Course:</h4>
                <p>{userData && userData.course}</p>
            </div>
            <div className='app__sp-container-text'>
                <h4>Branch:</h4>
                <p>{userData && userData.branch}</p>
            </div>
            <div className='app__sp-container-text'>
                <h4>Semester:</h4>
                <p>{userData && userData.sem}</p>
            </div>
            <div className='app__sp-container-text'>
                <h4>Year:</h4>
                <p>{userData && userData.year}</p>
            </div>

      </div>
    </div>

  )
}

