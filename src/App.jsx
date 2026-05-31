import "./App.css";
import { useState } from "react";
import General from "./components/General.jsx";
import Work from "./components/Work.jsx";
import School from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Language from "./components/Language.jsx";
import Preview from "./components/Preview.jsx";
import { GiSkills } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";
import { initialUser, initialWorkEntries, initialSchoolEntries, initialSkills, initialLangauges } from './data.js'

export default function App() {
  const [user, setUser] = useState(initialUser);
  const [workEntries, setWorkEntries] = useState(initialWorkEntries);
  const [schoolEntries, setSchoolEntries] = useState(initialSchoolEntries);    
  const [skills, setSkills] = useState(initialSkills);
  const [languages, setLanguages] = useState(initialLangauges);

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

  const createLanguage = () => {
    setLanguages([...languages, {id: crypto.randomUUID(), lang: ""}])
  }

  const  updateLanguage = (id, updatedData) => {
    setLanguages(languages.map(lan => 
      lan.id === id ? {...lan, ...updatedData} : lan
    ))
  }

  const deleteLanguage = (id) => {
    setLanguages(languages.filter(lan => lan.id !== id))
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

        <div className="language-container">
          <div className="language-section">
            <h2> <GrLanguage /> Languages</h2> 
          </div>
          <div className="language-wrapper">
            {languages.map((lan) => (
              <Language
              key={lan.id}
              lang={lan}
              onUpdate={updateLanguage}
              onDelete={deleteLanguage}
              />
            ))}
          </div>
        </div>
        <button className="add-btn" onClick={createLanguage}> + Add Language </button>
      </div>
      
      <div className="preview-panel">
        <Preview user={user} work={workEntries} school={schoolEntries} skills={skills} language={languages} />
      </div>
    </div>
  );
}



 