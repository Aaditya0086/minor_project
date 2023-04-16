// import React, { Component, useEffect, useState } from "react";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactPaginate from 'react-paginate';
// import { useRef } from "react";


// export default function AdminHome({ admin }) {

//   //setting state
//   const [data, setData] = useState([]);
//   const [limit,setLimit]=useState(5);
//   const [pageCount,setPageCount]=useState(1);
//   const currentPage=useRef();



//   useEffect(() => {
//     currentPage.current=1;
//     // getAllUser();
//     getPaginatedUsers();
//   }, []);


//   //fetching all user
//   const getAllUser = () => {
//     fetch("http://localhost:5000/getAllUser", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "adminData");
//         setData(data.data);
//       });
//   };



// //logout
//   const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./sign-in";
//   };


//   //deleting user
// //   const deleteUser = (id, name) => {
// //     if (window.confirm(`Are you sure you want to delete ${name}`)) {
// //       fetch("http://localhost:5000/deleteUser", {
// //         method: "POST",
// //         crossDomain: true,
// //         headers: {
// //           "Content-Type": "application/json",
// //           Accept: "application/json",
// //           "Access-Control-Allow-Origin": "*",
// //         },
// //         body: JSON.stringify({
// //           userid: id,
// //         }),
// //       })
// //         .then((res) => res.json())
// //         .then((data) => {
// //           alert(data.data);
// //           getAllUser();
// //         });
// //     } else {
// //     }
// //   };

//   //pagination
//   function handlePageClick(e) {
//     console.log(e);
//    currentPage.current=e.selected+1;
//     getPaginatedUsers();
   

//   }
//   function changeLimit(){
//     currentPage.current=1;
//     getPaginatedUsers();
//   }

//   function getPaginatedUsers(){
//     fetch(`http://localhost:5000/paginatedUsers?page=${currentPage.current}&limit=${limit}`, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "adminData");
//         setPageCount(data.pageCount);
//         setData(data.result)
        
       
//       });

//   }

//   return (
//     <div >
//       <div >
//         <h3>Welcome Admin</h3>
//         <table style={{ width: 500 }}>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>User Type</th>
//             {/* <th>Delete</th> */}
//           </tr>
//           {/* {data.map((i) => {
//             return (
//               <tr>
//                 <td>{i.uname}</td>
//                 <td>{i.email}</td>
//                 <td>{i.userType}</td>
//                 <td>
//                   <FontAwesomeIcon
//                     icon={faTrash}
//                     onClick={() => deleteUser(i._id, i.uname)}
//                   />
//                 </td>
//               </tr>
//             ); */}


//             return (
//               <tr>
//                 <td>{admin && admin.uname}</td>
//                 <td>{admin && admin.email}</td>
//                 <td>{admin && admin.userType}</td>
//                 {/* <td>
//                   <FontAwesomeIcon
//                     icon={faTrash}
//                     onClick={() => deleteUser(i._id, i.uname)}
//                   />
//                 </td> */}
//               </tr>
            

//           {/* })} */}
//         </table>
//         <ReactPaginate
//           breakLabel="..."
//           nextLabel="next >"
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={5}
//           pageCount={pageCount}
//           previousLabel="< previous"
//           renderOnZeroPageCount={null}
//           marginPagesDisplayed={2}
//           containerClassName="pagination justify-content-center"
//           pageClassName="page-item"
//           pageLinkClassName="page-link"
//           previousClassName="page-item"
//           previousLinkClassName="page-link"
//           nextClassName="page-item"
//           nextLinkClassName="page-link"
//           activeClassName="active"
//           forcePage={currentPage.current-1}
//         />
//         <input placeholder="Limit" onChange={e=>setLimit(e.target.value)}/>
//         <button onClick={changeLimit}>Set Limit</button>
//         <button onClick={logOut} className="btn btn-primary">
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
// import UserDetails from "../../components/userDetails";
import '../styles/landingadmin.css';
import { useSelector } from "react-redux";

export default function   AdminHome() {
  const { userData } = useSelector((state) => state.user);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  // const handleHereClick = () => {
  //   // history.push('/pending project')
  //   window.location.href = './student-form';
  // };

  return (
    <div className="app__adminhome">
      <div className="app__adminhome-image">
        <img src="https://mujslcm.jaipur.manipal.edu:122/keen/themes/keen/theme/demo1/dist/assets/media/misc/collage.png" alt="background-img" />
      </div>
        <div className="app__adminhome-text">
          <p>Name</p>
          <h3>{userData && userData.name}</h3>
          </div>
          {/* <div>
          <p>Email</p>
          <h3>{userData && userData.email}</h3>
          </div> */}
          <hr />
          <div className="app__adminhome-text">
          <h5>Hello, {userData && userData.name}. Hello teacher welcome to your dashboard.</h5>
          </div>
          {/* <br /> */}
          <div className="app__adminhome-btn">
          <button
            style={{
              backgroundColor: "#ffc107",
              borderColor: "#ffc107",
              color: "black",
            }}
            onClick={logOut}
            className="btn btn-primary"
            type="button"
          >
            Log Out
          </button>
          </div>
        </div>
  );
}