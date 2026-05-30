import "./App.css";
import { useState } from "react";
import General from "./components/General.jsx";
import Work from "./components/Work.jsx";
import School from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Preview from "./components/Preview.jsx";
import { GiSkills } from "react-icons/gi";

export default function App() {
  const [user, setUser] = useState({
    name: "McLovin",
    surname: "Fogell",
    email: "mclovin@hawaii.gov",
    phone: "(555) 555-1783",
    address: "Hawaii, HI",
    occupation: "Liquor Procurement Specialist",
    about: "Highly motivated and results-oriented procurement specialist with 1 year of experience in age-restricted retail environments. Proven ability to operate under pressure and maintain composure during law enforcement interactions.",
    avatar: "",
  });

  const [workEntries, setWorkEntries] = useState([
    {
      id: crypto.randomUUID(),
      role: "Liquor Procurement Specialist",
      company: "Fogell Independent Services",
      from: "2007-06",
      to: "Present",
      address: "Los Angeles, CA",
      description: "Designed and executed procurement strategies for age-restricted products. Demonstrated exceptional crisis management skills during high pressure civilian and law enforcement encounters.",
    },
    {
      id: crypto.randomUUID(),
      role: "Underage ID Consultant",
      company: "Self Employed",
      from: "2006-09",
      to: "2007-06",
      address: "San Diego, CA",
      description: "Provided strategic identity consulting for minors navigating restricted access environments. Maintained a 100% memorable client satisfaction rate.",
   },
  ]);

  const [schoolEntries, setSchoolEntries] = useState([{
    id: crypto.randomUUID(),
    school: "Abraham Lincoln High School",
    degree: "High School Diploma",
    from: "2004-09",
    to: "2007-06",
    address: "Los Angeles, CA",
    description: "Successfully completed core curriculum while managing an extensive social portfolio. Recognized for a landmark contribution to peer reputation management during senior year."
  }]);    

  const [skills, setSkills] = useState([
    {
      id: crypto.randomUUID(),
      category: "Programming Languages",
      skill: "Fake ID Forgery, Persuasion Scripting"
    },
    {
      id: crypto.randomUUID(),
      category: "Cloud Services",
      skill: "Hawaii DMV Database"
    },
    {
      id: crypto.randomUUID(),
      category: "Web Technologies",
      skill: "MySpace, AskJeeves"
    },
    {
      id: crypto.randomUUID(),
      category: "Databases",
      skill: "Local Liquor Store Inventory"
    },
  ]);

  const createWorkSection = () => {
    setWorkEntries([
      ...workEntries,
      {
        id: crypto.randomUUID(),
        role: "",
        company: "",
        from: "",
        to: "",
        address: "",
        description: "",
      },
    ]);
  };

  const updateWorkEntry = (id, updatedData) => {
    setWorkEntries(workEntries.map( entry => 
      entry.id === id ? {...entry, ...updatedData} : entry
    ))
  }

  const deleteWorkEntry = (id) => {
    setWorkEntries(workEntries.filter(entry => entry.id !== id))
  }


  const createSchoolSection = () => {
    setSchoolEntries([
      ...schoolEntries,
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        from: "",
        to: "",
        address: "",
        description: ""
      },
    ]);
  };

  const updateSchoolEntry = (id, updatedData) => {
    setSchoolEntries(schoolEntries.map( entry => 
      entry.id === id ? {...entry, ...updatedData} : entry
    ))
  }

  const deleteSchoolEntry = (id) => {
    setSchoolEntries(schoolEntries.filter(entry => entry.id !== id))
  }

  const createSkills = () => {
    setSkills([...skills, {id: crypto.randomUUID(), category: "", skill: ""}])
  }

  const  updateSkill = (id, updatedData) => {
    setSkills(skills.map(s => 
      s.id === id ? {...s, ...updatedData} : s
    ))
  }

  const deleteSkill = (id) => {
    setSkills(skills.filter(s => s.id !== id))
  }

  return (
    <div className="body-wrapper">
      <div className="form-panel">

        <General user={user} setUser={setUser} />

        {workEntries.map((entry) => (
          <Work 
          key={entry.id}
          entry={entry}
          onUpdate={updateWorkEntry}
          onDelete={deleteWorkEntry} 
          />
        ))}
        <button className="add-btn" onClick={createWorkSection}>+ Add Employment </button>

        {schoolEntries.map((entry) => (
          <School 
          key={entry.id}
          entry={entry}
          onUpdate={updateSchoolEntry}
          onDelete={deleteSchoolEntry} 
          />
        ))}
        <button className="add-btn" onClick={createSchoolSection}>+ Add Education </button>

        <div className="skills-container">
          <div className="skills-section">
            <h2> <GiSkills /> Skills</h2> 
          </div>

          {skills.map((s) => (
            <Skills
            key={s.id}
            skill={s}
            onUpdate={updateSkill}
            onDelete={deleteSkill}
            />
          ))}
        </div>
        <button className="add-btn" onClick={createSkills}> + Add Skills </button>
      </div>
      <div className="preview-panel">
        <Preview user={user} work={workEntries} school={schoolEntries} skills={skills} />
      </div>
    </div>
  );
}



 