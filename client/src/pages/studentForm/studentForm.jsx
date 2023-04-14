/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./StudentForm.css";
function StudentForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [reg, setReg] = useState("");
  // const [branch, setBranch] = useState("");
  // const [section, setSection] = useState("");
  // const [specialization, setSpecialization] = useState("");
  // const [teacherName, setTeacherName] = useState("");
  // const [teacherEmail, setTeacherEmail] = useState("");
  // const [sem, setSem] = useState("");
  // const [year, setYear] = useState("");
  // const [projectName, setProjectName] = useState("");

  const [students, setStudents] = useState([]);
  const [projects, setProjects] = useState([]);
  // const [selectedProject, setSelectedProject] = useState("");
  const [teammates, setTeammates] = useState([
    {
      name: "",
      email: "",
      reg: "",
      branch: "",
      section: "",
      sem: "",
      year: "",
      // selectedProject: "",
    },
  ]);
  const [teacher, setTeacher] = useState([
    { teacherName: "", teacherEmail: "", specialization: "", projectName: "" },
  ]);

  // const index = 0;

  useEffect(() => {
    // Fetch project allocation options from server
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Submit form data to server
  //   fetch("http://localhost:5000/submit-form-data", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       teammates,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // };

  const handleAddTeammate = () => {
    if (teammates.length < 4) {
      setTeammates([
        ...teammates,
        {
          name: "",
          email: "",
          reg: "",
          branch: "",
          section: "",
          selectedProject: "",
        },
      ]);
    } else {
      alert("You cannot add more than 4 teammates");
    }
  };

  const handleTeammateChange = (index, field, value) => {
    const newTeammates = [...teammates];
    newTeammates[index][field] = value;
    setTeammates(newTeammates);
  };

  const handleDeleteTeammate = (index) => {
    const newTeammates = [...teammates];
    newTeammates.splice(index, 1);
    setTeammates(newTeammates);
  };

  const handleAddTeacher = () => {
    if (teacher.length < 4) {
      setTeacher([
        ...teacher,
        {
          teacherName: "",
          teacherEmail: "",
          specialization: "",
          projectName: "",
        },
      ]);
    } else {
      alert("You cannot add more than 4 prefrences");
    }
  };

  const handleTeacherChange = (index, field, value) => {
    const newTeacher = [...teacher];
    newTeacher[index][field] = value;
    setTeacher(newTeacher);
  };

  const handleDeleteTeacher = (index) => {
    const newTeacher = [...teacher];
    newTeacher.splice(index, 1);
    setTeacher(newTeacher);
  };

  //
  const handleSubmit = async (e) => {
    e.preventDefault();

    const createTeammate = async () => {
      for (const m of teammates) {
        const { name, email, reg, branch, section, sem, year } = m;
        const res = await axios.post(
          "http://localhost:5000/auth/register/student",
          {
            name,
            email,
            section,
            branch,
            regNo: reg,
            sem,
            year,
          }
        );
        students.push(res.data);
      }
    };

    await createTeammate();
    const createTeam = async () => {
      const res = await axios.post("http://localhost:5000/team", {
        students,
        projectName: teacher[0].projectName,
      });
      console.log(res.data);
    };

    await createTeam();

    const createTeacher = async () => {
      for (const m of teacher) {
        const { teacherName, teacherEmail, specialization } = m;
        const res = await axios.post("http://localhost:5000/studentForm", {
          teacherName,
          teacherEmail,
          specialization,
        });
        console.log(res.data);
      }
    };

    /*  await createTeacher(); */
    setStudents([]);
    setTeacher([
      {
        teacherName: "",
        teacherEmail: "",
        specialization: "",
        projectName: "",
      },
    ]);
    setTeammates([
      {
        name: "",
        email: "",
        reg: "",
        branch: "",
        section: "",
        sem: "",
        year: "",
        // selectedProject: "",
      },
    ]);

    alert("Form Submission Successful");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     name,
  //     email,
  //     reg,
  //     branch,
  //     section,
  //     specialization,
  //     teacherName,
  //     teacherEmail,
  //     sem,
  //     year,
  //     projectName: selectedProject,
  //     teammates,
  //   };

  //   fetch("http://localhost:3000/submit-form-data", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log("Form submitted successfully:", result);
  //       // Clear form fields after successful submission
  //       setName("");
  //       setEmail("");
  //       setReg("");
  //       setBranch("");
  //       setSection("");
  //       setSpecialization("");
  //       setTeacherName("");
  //       setTeacherEmail("");
  //       setSem("");
  //       setYear("");
  //       setProjectName("");
  //       setSelectedProject("");
  //       setTeammates([
  //         {
  //           name: "",
  //           email: "",
  //           reg: "",
  //           branch: "",
  //           section: "",
  //           sem: "",
  //           year: "",
  //         },
  //       ]);
  //     })
  //     .catch((error) => {
  //       console.error("Error submitting form:", error);
  //     });
  // };

  return (
    <div className="app__studentform">
      <div className="app__studentform-img">
        <img
          src="https://mujslcm.jaipur.manipal.edu:122/keen/themes/keen/theme/demo1/dist/assets/media/misc/collage.png"
          alt="background-img"
        />
      </div>
      <div className="app__studentform-title">
        <h1>Student Form</h1>
      </div>
      <form onSubmit={handleSubmit} className="app__studentform-form">
        {teammates.map((teammate, index) => (
          <div key={index} className="app__studentform-container">
            <div className="app__studentform-name">
              <label htmlFor={`name${index}`}>Name:</label>
              <input
                placeholder="Name"
                type="text"
                id={`name${index}`}
                className="teammate-input"
                // setName("")
                value={teammate.name}
                onChange={(e) =>
                  handleTeammateChange(index, "name", e.target.value)
                }
              />
            </div>
            <div className="app__studentform-email">
              <label htmlFor={`email${index}`}>Email:</label>
              <input
                placeholder="Email"
                type="email"
                id={`email${index}`}
                className="teammate-input"
                value={teammate.email}
                onChange={(e) =>
                  handleTeammateChange(index, "email", e.target.value)
                }
              />
            </div>
            <div className="app__studentform-reg">
              <label htmlFor={`reg${index}`}>Reg-No.:</label>
              <input
                placeholder="Registration"
                type="text"
                id={`reg${index}`}
                className="teammate-input"
                value={teammate.reg}
                onChange={(e) =>
                  handleTeammateChange(index, "reg", e.target.value)
                }
              />
            </div>

            <div className="app__studentform-branch">
              <label htmlFor={`branch${index}`}>Branch:</label>
              <input
                placeholder="Branch"
                type="text"
                id={`branch${index}`}
                className="teammate-input"
                value={teammate.branch}
                onChange={(e) =>
                  handleTeammateChange(index, "branch", e.target.value)
                }
              />
            </div>

            <div className="app__studentform-section">
              <label htmlFor={`section${index}`}>Section:</label>
              <input
                placeholder="Section"
                type="text"
                id={`section${index}`}
                className="teammate-input"
                value={teammate.section}
                onChange={(e) =>
                  handleTeammateChange(index, "section", e.target.value)
                }
              />
            </div>

            <div className="app__studentform-sem">
              <label htmlFor={`sem${index}`}>Sem:</label>
              <input
                placeholder="Sem"
                type="text"
                id={`sem${index}`}
                className="teammate-input"
                value={teammate.sem}
                onChange={(e) =>
                  handleTeammateChange(index, "sem", e.target.value)
                }
              />
            </div>

            <div className="app__studentform-year">
              <label htmlFor={`year${index}`}>Year:</label>
              <input
                placeholder="Year"
                type="text"
                id={`year${index}`}
                className="teammate-input"
                value={teammate.year}
                onChange={(e) =>
                  handleTeammateChange(index, "year", e.target.value)
                }
              />
            </div>

            {/* <div className="app__studentform-project">
                <label htmlFor={project${index}}>Project:</label>
                <select
                id={project${index}}
                className="teammate-input"
                value={teammate.selectedProject}
                onChange={(event) =>
                handleTeammateChange(index, 'selectedProject', event.target.value)
                }
                >
                <option value="">Select Project</option>
                {projects.map((project) => (
                <option key={project.id} value={project.id}>
                {project.name}
                </option>
                ))}
                </select>
                </div> */}

            {teammates.length > 1 && (
              <div
                className="app__studentform-btn_1"
                onClick={() => handleDeleteTeammate(index)}
              >
                <button type="button">X</button>
              </div>
            )}
          </div>
        ))}

        <div className="app__studentform-btn" onClick={handleAddTeammate}>
          <button type="button">Add Teammate</button>
        </div>
        {teacher.map((teacher, index) => (
          <div key={index} className="app__studentform-container">
            <div className="app__studentform-name">
              <label htmlFor={`teacherName${index}`}>Teacher Name:</label>
              <input
                placeholder="Name"
                type="text"
                id={`teacherName${index}`}
                className="teacher-input"
                value={teacher.teacherName}
                onChange={(e) =>
                  handleTeacherChange(index, "teacherName", e.target.value)
                }
              />
            </div>
            <div className="app__studentform-email">
              <label htmlFor={`teacherEmail${index}`}>Teacher Email:</label>
              <input
                placeholder="Email"
                type="email"
                id={`teacherEmail${index}`}
                className="teacher-input"
                value={teacher.teacherEmail}
                onChange={(e) =>
                  handleTeacherChange(index, "teacherEmail", e.target.value)
                }
              />
            </div>

            <div className="app__studentform-specialization">
              <label htmlFor={`specialization${index}`}>Specialization:</label>
              <input
                placeholder="Specialization"
                type="text"
                id={`specialization${index}`}
                className="teacher-input"
                value={teacher.specialization}
                onChange={(e) =>
                  handleTeacherChange(index, "specialization", e.target.value)
                }
              />
            </div>

            <div className="app__studentform-projectname">
              <label htmlFor={`projectName${index}`}>Project Name:</label>
              <input
                placeholder="Project Name"
                type="text"
                id={`projectName${index}`}
                className="teacher-input"
                value={teacher.projectName}
                onChange={(e) =>
                  handleTeacherChange(index, "projectName", e.target.value)
                }
              />
            </div>
            {/* <div className="app__studentform-project">
                <label htmlFor={project${index}}>Project:</label>
                <select
                id={project${index}}
                className="teammate-input"
                value={teammate.selectedProject}
                onChange={(event) =>
                handleTeammateChange(index, 'selectedProject', event.target.value)
                }
                >
                <option value="">Select Project</option>
                {projects.map((project) => (
                <option key={project.id} value={project.id}>
                {project.name}
                </option>
                ))}
                </select>
                </div> */}

            {teacher.length > 1 && (
              <div
                className="app__studentform-btn_1"
                onClick={() => handleDeleteTeacher(index)}
              >
                <button type="button">X</button>
              </div>
            )}
          </div>
        ))}

        <div className="app__studentform-btn" onClick={handleAddTeacher}>
          <button type="button">Add Teacher</button>
        </div>

        <div className="app__studentform-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
