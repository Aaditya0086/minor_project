import React from 'react'
import '../teacherProfile/Teacher.css';
import { useSelector } from 'react-redux';

export default function TeacherProfile() {

    const { userData } = useSelector((state) => state.user)
 
  return (
    <div className='app__tp'>
      <div className='app__tp-image'>
        <img src="https://mujslcm.jaipur.manipal.edu:122/keen/themes/keen/theme/demo1/dist/assets/media/misc/collage.png" alt="background_img" />
      </div>
      <div className='app__tp-heading'>
        <h1>PROFILE</h1>
      </div>
      <hr />
      <div className='app__tp-container-column'>
            <div className='app__tp-container-text'>
                <h4>Name:</h4>
                <p>{userData && userData.name}</p>
            </div>
            <div className='app__tp-container-text'>
                <h4>ID:</h4>
                <p>{userData && userData.iD}</p>
            </div>
            <div className='app__tp-container-text'>
                <h4>Email:</h4>
                <p>{userData && userData.email}</p>
            </div>
            <div className='app__tp-container-text'>
                <h4>Mobile-No.:</h4>
                <p>{userData && userData.mobNo}</p>
            </div>
            <div className='app__tp-container-text'>
                <h4>Specialization:</h4>
                <p>{userData && userData.specialization}</p>
            </div>

      </div>
    </div>

  )
}


