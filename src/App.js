import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import SkillCell from "./components/SkillCell";
import {isolateStudentResults} from "./containers/ninjaMethods";


const createSkillCells = (student, skills, studentSkills) => {
    let studentResults = isolateStudentResults(student.id, studentSkills);
    return skills.map((skill)=>{
        return <SkillCell score={studentResults?.hasOwnProperty(skill.code) ? studentResults[skill.code] : ""} />
    });
}

function App() {
  const [students, setStudents] = useState([]);
  const [skills, setSkills] = useState([]);
  const [studentSkills, setStudentSkills] = useState([])

  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL + "/students")
        .then((evt) => {
          setStudents(evt.data.data)
        })
        .catch((evt) => {
          console.dir("fail");
          console.dir(evt);
        });

      axios.get(process.env.REACT_APP_API_URL + "/skills")
          .then((evt) => {
              setSkills(evt.data.data)
          })
          .catch((evt) => {
              console.dir("fail");
              console.dir(evt);
          });

      axios.get(process.env.REACT_APP_API_URL + "/students/skills")
          .then((evt) => {
              console.dir("Student Skills");
              console.dir(evt.data.data);
              setStudentSkills(evt.data.data)
          })
          .catch((evt) => {
              console.dir("fail");
              console.dir(evt);
          });


  },[])

  return (

    <div className="Container">
        <Table bordered>
            <thead>
                <tr>
                    <th>Student Name</th>
                    {
                        skills.map((skill)=>{
                           return <th>{skill.name}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
            {
                students.map((student)=>{
                    let cells = [<td>{student.firstname}</td>];
                    let moreCells = createSkillCells(student, skills, studentSkills);

                    return <tr key={student.FIRSTNAME}>
                        {cells.concat(moreCells)}

                    </tr>
                })
            }
            </tbody>
        </Table>
    </div>
  );
}

export default App;
